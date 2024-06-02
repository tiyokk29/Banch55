let dataBlog =[];

function submitBlog(event) {
event.preventDefault();

let inputProject = document.getElementById("inputProject").value;
let startDate = new Date(document.getElementById("startDate").value);
let endDate = new Date(document.getElementById("endDate").value);
let inputDescription = document.getElementById("inputDescription").value;
let nodejs = document.getElementById("nodejs").checked;
let reactjs = document.getElementById("reactjs").checked;
let nextjs = document.getElementById("nextjs").checked;
let typescript = document.getElementById("typescript").checked;
let inputImage =document.getElementById("inputImage").files;


if (inputProject == "") {
    alert("nama project tidak boleh kosong")
} else if (startDate =""){
    alert("start date harus diisi")
} else if (endDate ==""){
        alert("end date tidak harus diisi")
} else if (inputDescription == ""){
    alert("description tidak boleh kosong")
} else if (nodejs == "" && reactjs == "" && nextjs == "" && typescript == ""){ 
    alert("silahkan pilih salah satu technologies")
} else if (inputImage == "") {
    alert("silahkan masukkan gambar")
}else{
    alert("project sudah dibuat")
}

inputImage = URL.createObjectURL(inputImage[0]);

const blog = {
    title: inputProject,
    postAt: new Date(),
    startDate,
    endDate,
    body: inputDescription,
    nodejs,
    reactjs,
    nextjs,
    typescript,
    image: inputImage,
    
};
dataBlog.push(blog);
console.log("dataArray:", dataBlog);
renderBlog();
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";
  for (let index = 0; index < dataBlog.length; index ++) {
    document.getElementById(content).innerHTML +=`
    <div class="blog-list-items">
                  <div class="blog-image">
                      <img src="${dataBlog[index].image}" alt="image upload" class ="img" />
                  </div>
                  <div class="blog-content">
                      <div class="btn-group">
                          <button class="btn-edit"> Edit Blog </button>
                          <button class="btn-post"> Post Blog </button>
                          </div>
                      </div>
                      <h1>
                        <a href="blog-detail-html" target="_black">${dataBlog[index].title}</a>
                      </h1>
                      <div class="detail-blog">
                        ${dataBlog[index].postAt}
                      </div>
                      <div>
                      <p>
                      ${dataBlog[index].content}
                      </p>
                      </div>
      `
  }
}

