function handleModal(){
  let modal = document.getElementById("myModal");
  let btn = document.querySelectorAll("#myBtn");
  let span = document.getElementsByClassName("close")[0];
  for (let index = 0; index < btn.length; index++) {
    btn[index].onclick = function () {
      modal.classList.remove('d-none')
      modal.classList.add('d-flex-center')
    }
  }
  span.onclick = function () {
    modal.classList.add('d-none')
    modal.classList.remove('d-flex-center')
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.add('d-none')
      modal.classList.remove('d-flex-center')
    }
  }
}
function handleModalCreate(){
  let modalCreate = document.getElementById("myModalCreate");
  let btnCreate = document.querySelector("#myBtnCreate");
  let span1 = document.getElementById("closeCreate");
  console.log(modalCreate)
  btnCreate.onclick = function () {
    modalCreate.classList.remove('d-none')
    modalCreate.classList.add('d-flex-center')
  }
  span1.onclick = function () {
    modalCreate.classList.add('d-none')
    modalCreate.classList.remove('d-flex-center')
  }
  window.onclick = function (event) {
    if (event.target == modalCreate) {
      modalCreate.classList.add('d-none')
      modalCreate.classList.remove('d-flex-center')
    }
  }
}

