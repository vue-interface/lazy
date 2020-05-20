# Lazy

[[toc]]

## Installation

NPM

    npm i @vue-interface/lazy --save

Yarn

    yard add @vue-interface/lazy

CDN

    https://cdn.jsdelivr.net/npm/@vue-interface/lazy@<%= pkg.version %>/dist/Lazy.min.js

## Basic Example

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Lazy</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap-reboot.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap-grid.min.css">
    </head>
    <body>
        <div id="app" class="container">
            <h1 class="mb-5">v-lazy</h1>

            <h3>Basic Usage</h3>

            <img v-lazy="https://via.placeholder.com/350x150" />
            <img data-source="https://via.placeholder.com/350x150" />
            <img v-lazy="() => { // This is a callback. }" data-source="https://via.placeholder.com/350x150" />
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
        <script type="text/javascript" src="./dist/Lazy.umd.js"></script>
        <script type="text/javascript">
            const vue = new Vue({
                el: '#app',
                directives: {
                    Lazy
                }
            });
        </script>
    </body>
</html>
```