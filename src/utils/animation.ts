/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.
 *
 * Speed of animation (milliseconds timeout between each number increase)
 */
export default function increaseNumberAnimation(
  elementId: string,
  endNumber: number,
  speed: number = 10,
): void {
  const element = document.getElementById(elementId);

  if (!element) return;

  /* A dataset variable that is added to the animated element*/
  const animationRunning: boolean = JSON.parse(
    element.dataset.animationRunning ?? "false",
  );

  if (animationRunning) return;

  element.dataset.animationRunning = "true";

  incNbrRec(0, endNumber, element, speed);
}

/* A recursive function to increase the number. */
function incNbrRec(
  currentNumber: number,
  endNumber: number,
  element: HTMLElement,
  speed: number,
): void {
  if (currentNumber <= endNumber) {
    element.innerHTML = String(currentNumber);
    setTimeout(() => {
      incNbrRec(currentNumber + 1, endNumber, element, speed);
    }, speed); // Delay a bit before calling the function again.
  } else {
    element.dataset.animationRunning = "false";
  }
}

/* Call this function with the ID-name for that element to increase the number within */
// increaseNumberAnimation("nbr", 100);
