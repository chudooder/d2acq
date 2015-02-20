var abilities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: $.map(ABILITIES, function(ability) { return { value: ability }; })
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
		displayKey: 'value',
		source: abilities.ttAdapter()
	}).on('typeahead:selected', function (obj, datum) {
	    submitAnswer(datum.value)
	});
});


