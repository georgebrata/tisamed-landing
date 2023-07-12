///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

function getFullYear() {
  const yearEl = document.querySelector('.copyright-year');
  const currentYear = new Date().getFullYear();

  return (yearEl.innerHTML = currentYear);
}

getFullYear();

function active() {
  const btnContainer = document.getElementsByClassName('main-nav-list');
  // Get all buttons with class="btn" inside the container
  const btns = btnContainer[0].getElementsByClassName('main-nav-link');

  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      const current = document.getElementsByClassName('main-nav-link-active');
      current[0].className = current[0].className.replace(
        'main-nav-link-active',
        ''
      );
      this.className += ' main-nav-link-active';
    });
  }
}

active();
