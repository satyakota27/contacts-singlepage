#Contacts App
<ul>
<li>Contacts app fetches json data from a api host called apiary. It has sample 5 records.
</li><li>Contacts Controller fetches the data using $http module which handles success and error callbacks.
</li><li>Contacts table parses json content and displays its in the table.
</li><li><Add contact adds the contact data from add form to $scope variable.
</li><li>Delete contact checks the selected attribute and removes that json object.
</li><li>collapse expand is handled using bootstrap 4 accordion.</li>
</ul>

<p> Testcase handles scenarios of fetching the data by mocking. Fuctionalities such as addRow and DeleteRow are tested 
using single contact. </p> 