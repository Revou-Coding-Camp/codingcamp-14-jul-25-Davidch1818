let person = prompt("Please enter your name", "");
const selected = document.querySelector('input[name="kelamin"]:checked');
function getCurrentTimestamp() {
const d = new Date();
      const pad = (n) => (n < 10 ? "0" : "") + n;

      const yyyy = d.getFullYear();
      const MM   = pad(d.getMonth() + 1);
      const dd   = pad(d.getDate());
      const hh   = pad(d.getHours());
      const mm   = pad(d.getMinutes());
      const ss   = pad(d.getSeconds());

      return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
    }

document.getElementById("NamaSaya").innerHTML=person;

document.getElementById("btnSubmit").addEventListener("click",() =>{
    alert("Current time : "+getCurrentTimestamp()+"\n\nNama : "+document.getElementById("txtNama").value+"\nTanggal Lahir : "+document.getElementById("dtTgl").value+"\nJenis Kelamin : "+document.getElementById("rdo").value+"\nPesan : "+document.getElementById("txtPesan").value);
})