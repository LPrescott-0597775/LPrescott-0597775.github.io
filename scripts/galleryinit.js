window.addEventListener("load", createGallery);

function createGallery() {
   // gallery Container
   let gallery = document.getElementById("gallery");

   // Parts of the gallery
   let lbTitle = document.createElement("h2");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");
   
   // Design the gallery title
   gallery.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = galleryTitle;

   // Design the gallery slide counter
   gallery.appendChild(lbCounter);
   lbCounter.id = "lbCounter"; 
   let currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;

   // Design the gallery previous slide button
   gallery.appendChild(lbPrev);
   lbPrev.id = "lbPrev"; 
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   // Design the gallery next slide button
   gallery.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   // Design the gallery Play-Pause button
   gallery.appendChild(lbPlay);
   lbPlay.id = "lbPlay"; 
   lbPlay.innerHTML = "&#9199;";
   let timeID;
   lbPlay.onclick = function() {
      if (timeID) {
         // Stop the slideshow
         window.clearInterval(timeID);
         timeID = undefined;
      } else {
         // Start the slideshow
         showNext();
         timeID = window.setInterval(showNext, 1500);
      }
   }

   // Design the gallery images container
   gallery.appendChild(lbImages);
   lbImages.id = "lbImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
	  image.id = "galleryImg";
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }
   
   // Function to move forward through the image list
   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   // Function to move backward through the image list
   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   function createOverlay() {
      let overlay = document.createElement("div");
      overlay.id = "lbOverlay";
      
      // Add the figure box to the overlay
      let figureBox = document.createElement("figure");
	  figureBox.id = "expand";
      overlay.appendChild(figureBox);
      
      // Add the image to the figure box
      let overlayImage = this.cloneNode("true");
      figureBox.appendChild(overlayImage);

      // Add the caption to the figure box
      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt;
      figureBox.appendChild(overlayCaption);
      
      // Add a close button to the overlay
      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(overlay);
      }      
      overlay.appendChild(closeBox);
      
      document.body.appendChild(overlay);
   }   
}
