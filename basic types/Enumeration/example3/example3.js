var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Draft"] = 0] = "Draft";
    ApprovalStatus[ApprovalStatus["Submitted"] = 1] = "Submitted";
    ApprovalStatus[ApprovalStatus["Approved"] = 2] = "Approved";
    ApprovalStatus[ApprovalStatus["Rejected"] = 3] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
var request = {
    id: 1,
    status: ApprovalStatus.Approved,
    description: 'Please approve this request'
};
if (request.status === ApprovalStatus.Approved) {
    // Send an email
    console.log('Send email to the Applicant...');
}
