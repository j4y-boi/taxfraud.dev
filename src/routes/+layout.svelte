<svelte:head>
  <title>site 👍</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito&family=Bitcount+Single&display=swap" rel="stylesheet" />
  <style>        
      body {
          background-color: #00030d;
          font-family: 'Nunito', sans-serif;
          color:#7e86a3;
          background-image: radial-gradient(#333 5%, transparent 0);
          background-size: 35px 35px; 
      }

      h1 {
          font-family: 'Bitcount Single', cursive;
          margin: 0.1em 0;
          line-height: 1;
          font-size: clamp(2rem, 10vw, 5rem);
      }

      .center {
        margin: auto;
        width: 50%;
        border: 5px;
        border-color: #021147;
        padding: 10px;
      }

      .text_center {
          text-align: center;
      }

      .legal_disclaimer {
          font-size: 1em;
          color: #b5b5b5;
      }

      .bg-great-blue-900 {
        background-color: rgb(34, 41, 76)
      }
  </style>
</svelte:head>

<script>
  import "../app.css";
</script>

<slot />
