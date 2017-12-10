var abilities = new Bloodhound({
  datumTokenizer: function(datum) {
  	return datum.value.split(" ").concat(datum.hero.split(" "));
  },
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: ABILITIES
});

abilities.initialize();

$(document).ready(function(){
	$('#input-box .typeahead').typeahead({
		hint: true,
		highlight: true,
		minLength: 1,
		limit: 7
	},
	{
		name: 'abilities',
		display: function(datum) { return datum.hero + ": " + datum.value; },
		source: abilities.ttAdapter()
	}).on('typeahead:selected', function (obj, datum) {
	    submitAnswer(datum.value)
	});
});


