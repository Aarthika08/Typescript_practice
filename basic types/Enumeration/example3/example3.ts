enum ApprovalStatus {
    Draft,
    Submitted,
    Approved,
    Rejected
}

const request = {
    id: 1,
    status: ApprovalStatus.Approved,
    description: 'Please approve this request'
};

if (request.status === ApprovalStatus.Approved) {
    // Send an email
    console.log('Send email to the Applicant...');
}
