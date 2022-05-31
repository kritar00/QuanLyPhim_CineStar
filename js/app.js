function getFilms() {
    $.ajax({
        url: 'http://localhost:3000/Films',
        method: "GET",
        dataType: "JSON",
        success: function (data) {
            let count = 1;
            $('#item-table').empty()
            $.each(data, function (i, v) {
                    $('#item-table').append(
                        `<tr>
                            <td>${count}</td>
                            <td>${v.id}</td>
                            <td>${v.name}</td>
                            <td>${v.categoryName}</td>
                            <td>${v.description}</td>
                            <td>${v.evaluate}</td>
                            <td><a href="#" id="myBtn"><i class="fa-solid fa-pencil text-color mr-10px" onclick="setDataModalUpdate('${v.id}')" ></i></a>
                                <a href="#" onclick="deleteFilm('${v.id}')" ><i class="fa-solid fa-trash-can text-color"></i></a></td>
                        </tr>`
                    )
                count++
                
            })
            handleModal()
            handleModalCreate()
        }
    })
}
getFilms()

$('#createBtn').bind('click', createFilm);
function createFilm() {
    let Film = {
        id: uuidv4(),
        name: $('#modal-create-name').val(),
        categoryName: $('#modal-create-categoryName').val(),
        description: $('#modal-create-description').val(),
        evaluate: $('#modal-create-evaluate').val()
    }
    swal({
        title: "Tạo mới thành công",
        icon: "success",
      })
      .then((willCreated) => {
        if (willCreated) {
            $.ajax({
                url: 'http://localhost:3000/Films',
                method: "POST",
                dataType: "JSON",
                contentType: "application/JSON",
                data: JSON.stringify(Film),
                success: (data) => {
                }
            })
        }
      });

}

function setDataModalUpdate(id){
    console.log("DSADASDA")
    $.ajax({
        url: 'http://localhost:3000/Films/' + id,
        method: "GET",
        dataType: "JSON",
        success: function (data) {
            $("#modal-update-id").val(data.id)
            $("#modal-update-name").val(data.name)
            $("#modal-update-categoryName").val(data.categoryName)
            $("#modal-update-description").val(data.description)
            $("#modal-update-evaluate").val(data.evaluate)
        }
    })
}

function updateFilm() {
    let Film = {
        id: $('#modal-update-id').val(),
        name: $('#modal-update-name').val(),
        categoryName: $('#modal-update-categoryName').val(),
        description: $('#modal-update-description').val(),
        evaluate: $('#modal-update-evaluate').val()
    }
    swal({
        title: "Cập nhật thành công",
        icon: "success",
      })
      .then((willUpdated) => {
        if (willUpdated) {
            $.ajax({
                url: 'http://localhost:3000/Films/' + Film.id,
                method: "PUT",
                dataType: "JSON",
                contentType: "application/JSON",
                data: JSON.stringify(Film),
                success: function (data) {
                }
            })
        }
      });
}

function deleteFilm(id) {
    swal({
        title: "Xoá phim này ?",
        buttons: ["Huỷ", "Xoá"],
        icon: "warning",
    })
        .then((willDelete) => {
            if (willDelete) {
                $.ajax({
                    url : 'http://localhost:3000/Films/'+id,
                    method : "DELETE",
                    dataType : "JSON",
                    success : function (data){
                        
                    }
                })
            }
        });
}

function searchFilm(){
    let inpSearch = $('#search-Film').val()
    if(inpSearch!= ''){
        $.ajax({
            url: 'http://localhost:3000/Films',
            method: "GET",
            dataType: "JSON",
            success: function (data) {
                $('#item-table').empty()
                let count = 1;
                $.each(data, function (i, v) {
                    if(v.name == inpSearch){
                        $('#item-table').append(
                            `<tr>
                                <td>${count}</td>
                                <td>${v.id}</td>
                                <td>${v.name}</td>
                                <td>${v.categoryName}</td>
                                <td>${v.description}</td>
                                <td>${v.evaluate}</td>
                                <td><a href="#" id="myBtn"><i class="fa-solid fa-pencil text-color mr-10px" onclick="setDataModalUpdate('${v.id}')" ></i></a>
                                    <a href="#" onclick="deleteFilm('${v.id}')" ><i class="fa-solid fa-trash-can text-color"></i></a></td>
                            </tr>`
                        )
                        count++
                    }
                })
                handleModal()
                handleModalCreate()
            }
        })
    }
    else getFilm()
}