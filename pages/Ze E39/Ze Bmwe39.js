document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const btnAbout = document.getElementById("about-link");
  const btnModels = document.getElementById("models-link");
  const span = document.getElementsByClassName("close")[0];
  const modalText = document.querySelector(".modal-content p");

  // გახსნა
  btnAbout.onclick = function () {
    modalText.innerHTML = `
      <strong>BMW-ის მოკლე ისტორია:</strong>
      <p>BMW (Bayerische Motoren Werke) გერმანული ავტო კომპანიაა, რომელიც ცნობილია მაღალი ხარისხის სპორტული და ლუქს კლასის ავტომობილების წარმოებით. მისი ისტორია იწყება 1916 წელს, როდესაც კომპანიამ პირველად დაიწყო მოტორების წარმოება, განსაკუთრებით ავიამრქვის ძრავების.</p>
      <p><strong>1916:</strong> BMW დაარსდა როგორც "Bayerische Flugzeugwerke" და დაიწყო ავიამრქვის ძრავების წარმოება.</p>
      <p><strong>1923:</strong> BMW-მა წარმოადგინა პირველი მოტოციკლი, "R32".</p>
      <p><strong>1928:</strong> BMW-მა შეიძინა "Dixi", რაც მათ საშუალებას აძლევდა ავტომობილების წარმოების დაწყება.</p>
      <p><strong>1930-იანი წლები:</strong> კომპანიამ დაიწყო სპორტული ავტომობილების წარმოება.</p>
      <p><strong>1950-იანი წლები:</strong> BMW გახდა ცნობილი თავისი მაღალი ხარისხის და სპორტული ავტომობილებით.</p>
      <p><strong>1970-იანი წლები:</strong> BMW-მ დაიწყო "3" სერიის წარმოება.</p>
      <p><strong>1990-იანი წლები:</strong> კომპანიამ დაიწყო ახალი მოდელების შექმნა.</p>
      <p><strong>2000-იანი წლები:</strong> BMW განაგრძობს ინოვაციებს და ახალ ტექნოლოგიებზე მუშაობას.</p>
      <p>დღეს BMW არის ერთ-ერთი ყველაზე ცნობილი და პატივცემული ავტო მწარმოებელი კომპანია მსოფლიოში.</p>
    `;
    modal.style.display = "block";
  };

  btnModels.onclick = function () {
    modalText.innerHTML = `
      <strong>BMW-ის სხვა მოდელები:</strong>
      <ul>
        <li>BMW 1</li>
        <li>BMW 2</li>
        <li>BMW 3</li>
        <li>BMW 4</li>
        <li>BMW 5</li>
        <li>BMW 6</li>
      </ul>
    `;
    modal.style.display = "block";
  };

  // დახურვა
  span.onclick = function () {
    modal.style.display = "none";
  };

  // გარეთ დაწკაპუნებით დახურვა
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
