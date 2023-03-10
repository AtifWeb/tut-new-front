import { CardHeader } from "@material-ui/core";

export const CardWorking = () => {
  const CardHead = document.querySelectorAll(".metting-card-dropdown-icon");
  const HandleCard = (e) => {
    const CardHeadId = e.target.id.split("-");
    console.log(CardHeadId[2]);
    if (
      document
        .querySelector(`#meeting-${CardHeadId[2]}`)
        .classList.contains("active")
    ) {
      document
        .querySelector(`#meeting-${CardHeadId[2]}`)
        .classList.remove("active");
    } else {
      document
        .querySelector(`#meeting-${CardHeadId[2]}`)
        .classList.add("active");
    }

    // console.log(document.querySelector(`#${CardContentId}`));
  };
  CardHead.forEach((EachHead) => {
    EachHead.addEventListener("click", HandleCard);
  });
};
