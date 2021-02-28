import React from 'react';
import './Form.css'

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Dali Lab Suggestion Box', email: '', type: this.props.type };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h1 className="green-text">Enter Your Suggestions Here</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Enter your suggestions here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }  
  
  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_i5ufmmh';
	var recipients;
	var recipientsNames;

	// store the email list for the different groups here
	var academicsEmails = ['vicoleezy@gmail.com', 'vico.z.lee.24@dartmouth.edu'];
	var academicsNames = ['Vico', 'Vico Lee'];

	var admissionsEmails = [];
	var admissionsNames = [];

	var athleticsEmails = [];
	var athleticsNames = [];

	var communityEmails = [];
	var communityNames = [];

	var othersEmails = [];
	var othersNames = [];

	var contactUsEmails = ['vicoleezy@gmail.com']
	var contactUsNames = ['Vico'];

	
	// set recipient list according to the type
	if (this.state.type === 'academics') {
		recipients = academicsEmails;
		recipientsNames = academicsNames;
	} else if (this.state.type === 'admissions') {
		recipients = admissionsEmails;
		recipientsNames = admissionsNames;
	} else if (this.state.type === 'athletics') {
		recipients = athleticsEmails;
		recipientsNames = athleticsNames;
	} else if (this.state.type === 'community') {
		recipients = communityEmails;
		recipientsNames = communityNames;
	} else if (this.state.type === 'others') {
		recipients = othersEmails;
		recipientsNames = othersNames;
	} else if (this.state.type === 'contact us') {
		recipients = contactUsEmails;
		recipientsNames = contactUsNames;
	} else {
		recipients = [];	// empty recipient email list if sending to none of the available options
		recipientsNames = [];
	}

	// send to every recipient in the relevant recipient list
	if (this.state.feedback !== '') {
		for (var i = 0; i < recipients.length; i++) {
			this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, to_name: recipientsNames[i], reply_to: recipients[i], topic: this.state.type})
			console.log("Sent email to: " + recipientsNames[i] + "with email address: " + recipients[i]);
		}
	} else {
		console.log("Form was not successfully submitted because the message was empty.")
	}
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'service_z69t8ye', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Feedback was unsuccessfully sent. Error: ' + err))
  }

}