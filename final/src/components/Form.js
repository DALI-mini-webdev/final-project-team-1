import React from 'react';

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
    	<h1>Enter Your Suggestions Here</h1>
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

	// store the email list for the different groups here
	var academicsEmails = ['vicoleezy@gmail.com', 'vico.z.lee.24@dartmouth.edu'];
	var admissionsEmails = [];
	var athleticsEmails = [];
	var communityEmails = [];
	var othersEmails = [];
	var contactUsEmails = ['vicoleezy@gmail.com']
	
	// set recipient list according to the type
	if (this.state.type === 'academics') {
		recipients = academicsEmails;
	} else if (this.state.type == 'admissions') {
		recipients = admissionsEmails;
	} else if (this.state.type == 'athletics') {
		recipients = athleticsEmails;
	} else if (this.state.type == 'community') {
		recipients = communityEmails;
	} else if (this.state.type == 'others') {
		recipients = othersEmails;
	} else if (this.state.type == 'contact us') {
		recipients = contactUsEmails;
	} else {
		recipients = [];	// empty recipient email list if sending to none of the available options
	}

	// send to every recipient in the relevant recipient list
	if (this.state.feedback != '') {
		for (var i = 0; i < recipients.length; i++) {
			console.log(recipients[i]);
			this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: recipients[i], topic: this.state.type})
		}
	} else {
		console.log("Form was not successfully submitted becasue the message was empty.")
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