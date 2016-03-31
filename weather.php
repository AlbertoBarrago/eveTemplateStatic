<?php
	
	/* get xml, find match */
	
	/* get the weather from Yahoo */ //Zip Code Naples 80121
	$data = get_data("http://weather.yahooapis.com/forecastrss?p=80121&u=c");
	
	$weather_class = format_result(get_match('/<yweather:condition  text="(.*)"/isU',$data));
	
	/* debug to see what we got back */
	//echo '<pre style="background:#fff;font-size:12px;">['; print_r($weather); echo ']</pre>';
	
	/* format the result */
	function format_result($input)
	{
		return strtolower(str_replace(array(' ', '(', ')'), array('-', '-', ''), $input));
	}
	
	/* helper:  does regex */  
	function get_match($regex,$content)  
	{  
		preg_match($regex,$content,$matches);  
		return $matches[1];  
	}
	
	/* gets the xml data from Alexa */
	function get_data($url)
	{
		$ch = curl_init();
		$timeout = 5;
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
		curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
		$xml = curl_exec($ch);
		curl_close($ch);
		return $xml;
	}
	
?>