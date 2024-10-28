// document.getElementById('copyText').onclick = function () {
//     // Create a range and selection to select the text
//     const range = document.createRange();
//     const selection = window.getSelection();

//     // Clear current selection if any
//     selection.removeAllRanges();

//     // Select the text content of the element
//     range.selectNodeContents(document.getElementById('copyText'));
//     selection.addRange(range);

//     // Execute the copy command
//     try {
//         const successful = document.execCommand('copy');
//         const msg = successful ? 'successful' : 'unsuccessful';
//         console.log('Copy text command was ' + msg);
//     } catch (err) {
//         console.log('Oops, unable to copy');
//     }

//     // Remove the selections - cleanup
//     selection.removeAllRanges();
// };

// document.getElementById('copyText').addEventListener('click', async function () {
//     try {
//         await navigator.clipboard.writeText(this.innerText);
//         console.log('Text copied to clipboard');
//     } catch (err) {
//         console.error('Failed to copy text: ', err);
//     }
// });


// const span = document.getElementById("copyText");

// span.onclick = function() {
//   document.execCommand("copy");
// }

// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     console.log(event.clipboardData.getData("text"))
//   }
// });


const span1 = document.getElementById("copyEmail");
const span2 = document.getElementById("copyAdd");
const span3 = document.getElementById("copyNumber");

span1.onclick = function() {
  navigator.clipboard.writeText(span1.textContent).then(() => {
    alert('Text copied to clipboard');
    console.log('Text copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

span2.onclick = function() {
    navigator.clipboard.writeText(span2.textContent).then(() => {
      alert('Text copied to clipboard');
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

span3.onclick = function() {
    navigator.clipboard.writeText(span3.textContent).then(() => {
      alert('Text copied to clipboard');
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
}


