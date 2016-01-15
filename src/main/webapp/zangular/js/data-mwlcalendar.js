function (wgt, option) {
	
	  var self = this;
	  if (self.command) {
		  // get the events from the view model
		  self.command("$getEvents");
	  }
	  // MVVM only
	  if (self.after) {
	    // refresh the calendar by the events gotten from the VM
	    self.after('$initEvent', function (evt) {
	    	if (evt != null) {
	    		for (var i = 0 ; i < evt.length; i++) {
	    			var jsonEvent = evt[i];
	    			angular.element("#demo").scope().vm.events.push({title : jsonEvent.title, type : jsonEvent.type, startsAt : new Date(jsonEvent.startsAt),endsAt : new Date(jsonEvent.endsAt),draggable : true,resizable : true})
	    	    }
	        angular.element("#demo").scope().$apply();
	      }
	    });
	    }
}