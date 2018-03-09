/**Allows highlighting (<mark>'ing) one section of code after another
 * within a <pre><code> block.
 *
 * The <pre><code> block should be in a <section> with data-code-stepper=name.
 *
 * steps is an array of text strings to highlight.
 *
 * The <pre><code> blocks should be absolutely positioned, so that they
 * overlap.  (This must be done in CSS and is not handled by this function.)
 */
function configureCodeStepper(name, steps) {
  let container = document.querySelector(`[data-code-stepper="${name}"`);
  let firstChild = container.childNodes[1];
  firstChild.setAttribute('data-fragment-index', 0);
  firstChild.classList.add('fragment', 'fade-out');

  for (let i = 0; i < steps.length; i++) {
    let newPre = firstChild.cloneNode(true);
    newPre.setAttribute('data-fragment-index', i);
    newPre.classList.remove('fade-out');
    firstChild.parentNode.insertBefore(newPre, null);
    newPre.innerHTML = newPre.innerHTML.replace(steps[i], '<mark>' + steps[i] + '</mark>');
  }
}

