# squarespace-scripts












//MAP
/* Map container styling */
#map {
  height: 400px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

/* Custom info window styling */
.custom-info-window {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 5px;
  max-width: 260px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  z-index: 100;
}

.custom-info-window img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 6px;
}

.custom-info-window a {
  text-decoration: underline;
  color: black;
}

.custom-info-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 0 6px;
  border-radius: 4px;
}

@media (max-width: 500px) {
  .custom-info-window {
    max-width: 90vw;
  }
}


//MAP TOGGLE
section[data-section-id="682d1584d3d904411ad6dde0"] {
  transition: max-height 0.4s ease;
  max-height: 0;
  opacity: 1;
  overflow: hidden;
  pointer-events: none;
}

section[data-section-id="682d1584d3d904411ad6dde0"].visible {
  max-height: 1000px; /* Large enough to accommodate your map */
  opacity: 1;
  pointer-events: auto;
}




/* Make Squarespace form error messages subtle and inline */

p.form-field-error {
  background-color: transparent !important;
  color: #cc0000 !important;
  padding: 0 !important;
  margin: 0.25em 0 0.5em 0 !important;
  border: none !important;
  font-size: 0.5em;
  font-weight: normal;
  box-shadow: none !important;
  display: inline-block;
}

p.form-field-error svg {
  display: none !important; /* Hide the red warning icon */
}










