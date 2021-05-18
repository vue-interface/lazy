import { event } from '@vue-interface/utils';

function lazy(el, binding) {
    // If the image already has a source and source is same as lazy loader,
    // then kill it.
    if( el.getAttribute('src') && 
        el.getAttribute('src') === el.getAttribute('data-src')) {
        return;
    }

    // If the data source is a binary URL, just put that into src directly.
    if(el.getAttribute('data-src').match(/data\:/)) {
        el.src = el.getAttribute('data-src');
        el.removeAttribute('data-src');
    }
    else {
        el.dispatchEvent(event('loading'));
        
        // Create an image node
        const img = document.createElement('img');

        // Set the source
        img.src = el.getAttribute('data-src');

        // Wait for it to load and set the source.
        img.addEventListener('load', e => {
            el.setAttribute('src', img.src);

            // If the binding value is a function, treat it like a callback.
            if(binding.value instanceof Function) {
                binding.value(img);
            }

            if(el.tagName !== 'IMG') {
                el.dispatchEvent(event(e.type, e));
            }
        });

        if(el.tagName !== 'IMG') {
            img.addEventListener('error', e => {
                el.dispatchEvent(event(e.type, e));
            });
        }
    }
}

export default function(el, binding, value) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting }) => {
            if(isIntersecting) {
                lazy(el, binding);
                
                observer.disconnect();
            }
        });
    });

    observer.observe(el);
};