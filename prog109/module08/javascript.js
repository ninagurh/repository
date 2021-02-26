<form action="" id="myform" >
<p>
	<label for='FirstName'>First Name:</label>
	<input type="text" id="FirstName" name="FirstName" />
</p>
<p>
	<label for='LastName'>Last Name:</label>
	<input type="text" id="LastName" name="LastName" />
</p>
<p>
	<label for='EMail'>EMail:</label>
	<input type="text" id="EMail" name="EMail" />
</p>
<p>
	<label for='Phone'>Phone:</label>
	<input type="text" id="Phone" name="Phone" />
</p>
<p>
	<label for='Address'>Address:</label>
	<textarea cols="20" rows="5" id="Address" name="Address"></textarea>
</p>
<p>
	<label for='Country'>Country:</label>
	<select id="Country"  name="Country">
        <option value="000" selected="selected">[choose yours]</option>
        <option value="008">Albania</option>
        <option value="012">Algeria</option>
        <option value="016">American Samoa</option>
        <option value="020">Andorra</option>
        <option value="024">Angola</option>
        <option value="660">Anguilla</option>
        <option value="010">Antarctica</option>
        <option value="028">Antigua And Barbuda</option>
        <option value="032">Argentina</option>
        <option value="051">Armenia</option>
        <option value="533">Aruba</option>
	</select>
</p>
<p>
	<input type="submit" name="submit" value="Submit">
</p>
</form>

<script  type="text/javascript">
 var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
		"Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req");
 frmvalidator.addValidation("LastName","maxlen=20");

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");

 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");

 frmvalidator.addValidation("Address","maxlen=50");
 frmvalidator.addValidation("Country","dontselect=000");

</script>
