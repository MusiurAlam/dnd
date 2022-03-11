const dnd = () => {
    if (typeof document !== "undefined") {





        document.addEventListener('DOMContentLoaded', (event) => {
            let dragSrcEl
            function handleDragStart(e) {
                this.style.opacity = '0.4';
                
                dragSrcEl = this;
            }

            function handleDragEnd(e) {
                this.style.opacity = '1';

                items.forEach(function (item) {
                    item.classList.remove('over');
                });


            }

            function handleDragOver(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }

                return false;
            }

            function handleDragEnter(e) {
                this.classList.add('over');
            }

            function handleDragLeave(e) {
                this.classList.remove('over');
            }

            function handleDrop(e) {
                e.stopPropagation();

                if (dragSrcEl !== this) {
                    let temp = dragSrcEl.innerHTML;
                    dragSrcEl.innerHTML = this.innerHTML;
                    this.innerHTML = temp;
                    // this.innerHTML = e.dataTransfer.getData('text/html');
                }

                return false;
            }

            let items = document.querySelectorAll('.container .box');
            items.forEach(function (item) {
                item.addEventListener('dragstart', handleDragStart);
                item.addEventListener('dragover', handleDragOver);
                item.addEventListener('dragenter', handleDragEnter);
                item.addEventListener('dragleave', handleDragLeave);
                item.addEventListener('dragend', handleDragEnd);
                item.addEventListener('drop', handleDrop);
            });
        });


    }
}

export default dnd;