<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
  <h1>SaveThyTab</h1>

  <p>
    <strong>SaveThyTab</strong> is a simple web app to save and manage your favorite URLs. 
    Add links, view them in a clean list, and delete all if needed. 
    The app uses <strong>Firebase Realtime Database</strong> to store your links, so they persist across sessions.
  </p>

  <p>Live Demo: <a href="https://savethytab.netlify.app/" target="_blank">https://savethytab.netlify.app/</a></p>

  <h2>Features</h2>
  <ul>
    <li>Save URLs with a single click.</li>
    <li>View all saved links in a neat, stacked list.</li>
    <li>Delete all saved links at once.</li>
    <li>Persistent storage using Firebase Realtime Database.</li>
    <li>Clean, minimal, dark-themed design.</li>
    <li>Fully mobile-friendly — works on phones and tablets.</li>
  </ul>

  <h2>How to Use</h2>
  <h3>On Desktop</h3>
  <ol>
    <li>Open the app: <a href="https://savethytab.netlify.app/" target="_blank">https://savethytab.netlify.app/</a></li>
    <li>Enter a URL in the input field.</li>
    <li>Click <code>SAVE INPUT</code> to add the link.</li>
    <li>Click <code>DELETE ALL</code> to remove all saved links.</li>
    <li>Click any saved link to open it in a new tab.</li>
  </ol>

  <h3>On Mobile</h3>
  <ol>
    <li>Open your mobile browser (Chrome, Safari, etc.).</li>
    <li>Go to <a href="https://savethytab.netlify.app/" target="_blank">https://savethytab.netlify.app/</a></li>
    <li>You can <strong>add a shortcut to your home screen</strong> for quick access:
      <ul>
        <li><strong>iOS Safari:</strong> Tap <code>Share → Add to Home Screen</code></li>
        <li><strong>Android Chrome:</strong> Tap <code>Menu → Add to Home Screen</code></li>
      </ul>
    </li>
  </ol>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript (ES Modules)</li>
    <li><strong>Backend/Database:</strong> Firebase Realtime Database</li>
    <li><strong>Hosting:</strong> Netlify</li>
  </ul>
</body>
</html>
