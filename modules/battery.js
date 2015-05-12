MoWAT.createModule("battery", function(sandbox) {
	
	function logBattery(battery) {
		sandbox.log(battery.charging);
		sandbox.log(battery.level);
		sandbox.log(battery.dischargingTime);
	}
	
	function batteryFunction(battery) {
		// Update the battery status initially when the promise resolves ...
        logBattery(battery);

        // .. and for any subsequent updates.
        battery.onchargingchange = function () {
          logBattery(battery);
        };

        battery.onlevelchange = function () {
          logBattery(battery);
        };

        battery.ondischargingtimechange = function () {
          logBattery(battery);
        };
	}
	
	return {
		init: function () {
			navigator.getBattery().then(batteryFunction);
		},
		destroy: function () {
			
		}
	};
});