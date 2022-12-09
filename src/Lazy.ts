import { DirectiveBinding, VNode } from "vue";

function lazy(el: HTMLElement, binding: DirectiveBinding) {
    // If the image already has a source and source is same as lazy loader,
    // then kill it.
    if( el.getAttribute('src') && 
        el.getAttribute('src') === el.getAttribute('data-src')) {
        return;
    }

    let dataSrc = el.getAttribute('data-src');

    // If the data source is a binary URL, just put that into src directly.
    if(dataSrc?.match(/data\:/)) {
        el.setAttribute('src', dataSrc);
        el.removeAttribute('data-src');
    }
    else if(dataSrc) {
        el.dispatchEvent(new Event('loading'));
        
        // Create an image node
        const img = document.createElement('img');

        // Set the source
        img.setAttribute('src', dataSrc);

        // Wait for it to load and set the source.
        img.addEventListener('load', e => {
            el.setAttribute('src', img.src);

            // If the binding value is a function, treat it like a callback.
            if(binding.value instanceof Function) {
                binding.value(img);
            }

            if(el.tagName !== 'IMG') {
                el.dispatchEvent(new Event(e.type, e));
            }
        });

        if(el.tagName !== 'IMG') {
            img.addEventListener('error', e => {
                el.dispatchEvent(new Event(e.type, e));
            });
        }
    }
}

export default {
    beforeMount(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ isIntersecting }) => {
                if(isIntersecting) {
                    lazy(el, binding);
                
                    observer.disconnect();
                }
            });
        });

        observer.observe(el);
    }
};