// Adding pictures 
let pfpBackground = document.querySelector(".bg-img")
let inputFile = document.getElementById("input-file")
let bgText = document.getElementById("bg-text")

inputFile.onchange = () => {
    pfpBackground.src = URL.createObjectURL(inputFile.files[0])
    bgText.style.display = "none"
}

let pfp = document.querySelector(".pfp")
let inputpfp = document.getElementById("input-pfp")
let pfpText = document.getElementById("pfp-text")

inputpfp.onchange = () => {
    pfp.src = URL.createObjectURL(inputpfp.files[0])
    pfpText.style.display = "none"
}

// adding and removing posts
var addPostBtn = document.getElementById("addPostBtn")
var postsContainer = document.getElementById("postsContainer")

var postIdCounter = 1 // counter for post id-s

function addPost() {
    var post = document.createElement("div")
    post.className = "post flexCenter"
    post.id = "post" + postIdCounter

    post.innerHTML = `
    <div class="post flexCenter relative">
        <div class="post-image border flexCenter">
            <svg width="150px" height="150px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <div class="edit-post absolute flexCenter">
            <div class="edit" onclick="openFileInput(this)">
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45px" height="45px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255 C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602 s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536 L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999 v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94 l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259 L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"></path> </g></svg>
            </div>
            <div class="delete">
                <svg width="45px" height="45px" viewBox="-3 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_21" data-name="Group 21" transform="translate(-379 -89)"> <path id="Path_23" data-name="Path 23" d="M417,95h-9V93a4,4,0,0,0-4-4h-8a4,4,0,0,0-4,4v2h-9a4,4,0,0,0-4,4v4h.988a2.8,2.8,0,0,1,3.02,2.129l3.532,27.015A5.638,5.638,0,0,0,392,137h16a5.637,5.637,0,0,0,5.459-4.843l3.529-27c.014-.087.36-2.122,3.024-2.153H421V99A4,4,0,0,0,417,95Zm-23-2a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v2h-2v-.5a1.5,1.5,0,0,0-1.5-1.5h-5a1.5,1.5,0,0,0-1.5,1.5V95h-2Zm-13,6a2,2,0,0,1,2-2h34a2,2,0,0,1,2,2v2H381Zm34.009,5.871-3.534,27.039A3.637,3.637,0,0,1,408,135H392a3.638,3.638,0,0,1-3.476-3.1l-3.536-27.051a4.442,4.442,0,0,0-.8-1.847h31.621A4.5,4.5,0,0,0,415.009,104.871Z" fill="#303033"></path> <g id="Group_20" data-name="Group 20"> <rect id="Rectangle_9" data-name="Rectangle 9" width="4" height="18" transform="translate(398 110)" fill="#7d50f9"></rect> <path id="Path_24" data-name="Path 24" d="M406,110h4l-2,18h-2Z" fill="#7d50f9"></path> <path id="Path_25" data-name="Path 25" d="M390,110h4v18h-2Z" fill="#7d50f9"></path> </g> </g> </g></svg>
            </div>
        </div>
        <h2 class="post-title" contenteditable="true">Post title</h2>
        <p class="post-text" contenteditable="true">Post Small Text</p>
    </div>
    `

    postsContainer.appendChild(post)
    postIdCounter++

    var deleteIcon = post.querySelector(".delete")
    deleteIcon.addEventListener("click", () => {
        removePost(post.id)
        if (postIdCounter > 1) {
            postIdCounter--
        }
    })
}

function removePost(postId) {
    var postToRemove = document.getElementById(postId)
    if (postToRemove) {
        postsContainer.removeChild(postToRemove)
    }
}

// editing pictures in posts
function openFileInput(editButton) {
    var imageContainer = editButton.closest('.post').querySelector('.post-image')
    var fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'image/*'
    fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader()
            reader.onload =  (e) => {
                imageContainer.innerHTML = '<img src="' + e.target.result + '" class="postImg" />'
            }
            reader.readAsDataURL(fileInput.files[0])
        }
    })
    fileInput.click()
}


    addPostBtn.addEventListener("click", addPost)

// adding four posts on page load
for (var i = 0; i < 4; i++) {
    addPost();
}