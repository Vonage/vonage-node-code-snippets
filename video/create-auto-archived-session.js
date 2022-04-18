opentok.createSession({mediaMode:'routed', archiveMode:'always'}, function(err, session) {
    if (error) {
      console.log("Error creating session:", error)
    } else {
      sessionId = session.sessionId;
      console.log("Session ID: " + sessionId);
    }
  });