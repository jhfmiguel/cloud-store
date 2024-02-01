class CloudStorageController {

    constructor () {

        this.btnSendFileEl = document.querySelector( '#btn-send-file' );
        this.inputFilesEl = document.querySelector( '#files' );
        this.snackModalEl = document.querySelector("#react-snackbar-root");

        this.initEvents();

    }


    initEvents() {
        
        this.btnSendFileEl.addEventListener( 'click', event => {

            this.inputFilesEl.click();

        } );

        this.inputFilesEl.addEventListener("change", (event) => {
      
            this.uploadTask(event.target.files);

            this.snackModalEl.style.display = 'block';

          });

    }

    uploadTask( files ) {
        
        const filesElement = useRef(null);

        const sendFile = async () => {
            const dataForm = new FormData();
            for (const file of filesElement.current.files) {
            dataForm.append('input-file', file);
            }
            const res = await fetch(`http://localhost:3000/upload`, {
            method: 'POST',
            body: dataForm,
            });
            const data = await res.json();
            console.log(data);

        }

    }
}