const GAME_SPEED = 100;
    const CANVAS_BORDER_COLOUR = 'black';
    const CANVAS_BACKGROUND_COLOUR = "white";

    const canvas = document.getElementById("canvas");
    // Return a two dimensional drawing context
    const ctx = canvas.getContext("2d");

      //  Select the colour to fill the drawing
      ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
      //  Select the colour for the border of the canvas
      ctx.strokestyle = CANVAS_BORDER_COLOUR;
      // Draw a "filled" rectangle to cover the entire canvas
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw a "border" around the entire canvas
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
