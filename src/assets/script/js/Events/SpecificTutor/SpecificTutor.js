export const HandleSpecificTutorEvent = () => {
  let SelectHeadPresentation = document.querySelector(".select-head p");
  let SelectContent = document.querySelector(".select-content");
  let SelectListLabel = document.querySelectorAll(".select-content li label");

  const HandleLabelText = (e) => {
    let Text = e.target.textContent;
    SelectHeadPresentation.textContent = Text;
    SelectContent.classList.remove("active");
  };

  SelectListLabel.forEach((EachLabel) => {
    EachLabel.addEventListener("click", HandleLabelText);
  });
};
