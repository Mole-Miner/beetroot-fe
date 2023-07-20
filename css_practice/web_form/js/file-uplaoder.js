const chooseFile = document.getElementById('choose-file');
const fileUpload = document.getElementById('file-upload');
const profileAvatar = document.getElementById('profile-avatar');
const fileName = document.getElementById('file-name');
const removeFile = document.getElementById('remove-file');

chooseFile.addEventListener('click', () => {
  fileUpload.click();
});

removeFile.addEventListener('click', () => {
  fileName.textContent = 'Select file';
  profileAvatar.src = '';
  fileUpload.value = null;
});

fileUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = () => {
    fileName.textContent = file.name;
    profileAvatar.src = fileReader.result;
  }
  fileReader.readAsDataURL(file);
});