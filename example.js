
// Include the scripts.
// By convention plugin filenames are named `rool-{plugin type}-{plugin-key}.js`
// <script src="rool.min.js"></script>
// <script src="rool-storage-idb.min.js"></script>
// <script src="rool-storage-websql.min.js"></script>
// <script src="rool-transport-ajax.min.js"></script>
// <script src="rool-transport-ws.min.js"></script>

// Plugins register themselfs using either the storage or the transport methods.
Rool.storage('idb', {});    // Some IndexedDB implementation (implements the RoolStorage interface)
Rool.storage('websql', {}); // Some WebSQL implementation (implements the RoolStorage interface)
Rool.transport('ajax', {}); // Some AJAX implementation (implements the RoolTransport interface)
Rool.transport('ws', {});   // Some WebSocket implementation (implements the RoolTransport interface)
// Plugins can be minimal as they can act as a proxy between a Rool interface and an already existing 
// object sutch as jQuery’s Ajax implementation or the native fetch method. 

// Config the defaults
Rool.defaults({
    storage: ['idb', 'websql'], // Use IndexedDb with WebSQL fallback
    transport: ['ws', 'ajax']   // Use WebSockets with AJAX as fallback
});

// Create a new store. A store has a 1 to 1 relation with a remote. The options argument overrides the defaults. 
// Options to plugins are passed by defining a property with the name of the plugin.
var translationsStore = Rool.create('translations-store', {
    storage: ['idb'],
    transport: ['ajax'],
    ajax: {
        url: 'https://example.com/translations.json'
    }
});
// The store is lazy, so you must call fetch-method explicitly if you wish to fetch the data immediately.
translationsStore.fetch(aditionalParams);

// Listen to changes in the store by subscribing to the data event.
translationsStore.on('data', onData).on('error', onError);
function onData(data) {
    console.log('The translations store changed', data);
}
function onError(error) {
    console.log('An error occured in the translations store', error);
}

// Stop listen to changes in the store
translationsStore.off('data', onData).off('error', onError);

// Empty the store
translationsStore.clear();

// Clear out all event listeners and removes the data from the local store.
translationsStore.dispose(); // or Rool.dispose('translations');
