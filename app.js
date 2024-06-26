// Function to simulate an error
function triggerError() {
    try {
      // Intentionally accessing a non-existent property to throw an error
      let obj = {};
      console.log(obj.nonExistentProperty);
    } catch (error) {
      // Log the error to Sentry
      Sentry.captureException(error);
    }
  }
  