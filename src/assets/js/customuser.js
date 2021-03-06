
$(document).ready(function () {
   
    $('#modalDemandeNaissance').modal('handleUpdate');
    $('#modalDeclarationNaissance').modal('handleUpdate');
    $('#modalDemandeMariage').modal('handleUpdate');
    $('#modalDeclarationDeces').modal('handleUpdate');
    $('#modalDemandeDeces').modal('handleUpdate');

 /**   var btnFinish = $('<button></button>').text('Valider')
        .addClass('btn btn-info disabled')
        .on('click', function () {
            if (!$(this).hasClass('disabled')) {
                var elmForm = $("#myForm");
                if (elmForm) {
                    elmForm.validator('validate');
                    var elmErr = elmForm.find('.has-error');
                    if (elmErr && elmErr.length > 0) {
                        alert('Oops we still have error in the form');
                        return false;
                    } else {
                        alert('Great! we are ready to submit form');
                        console.log(elmForm.getElementById("motif"));
                        elmForm.submit();
                        return false;
                    }
                }
            }
        });  */

    var btnCancel = $('<button></button>').text('Annuler')
        .addClass('btn btn-danger')
        .on('click', function () {
            $('#stepwizard').smartWizard("reset");
            $('#myForm').find("input, textarea").val("");
        });

        var btnCancel1 = $('<button></button>').text('Annuler')
        .addClass('btn btn-danger')
        .on('click', function () {
            $('#stepwizard1').smartWizard("reset");
            $('#myForm1').find("input, textarea").val("");
        });

        var btnCancel2 = $('<button></button>').text('Annuler')
        .addClass('btn btn-danger')
        .on('click', function () {
            $('#stepwizard2').smartWizard("reset");
            $('#myForm2').find("input, textarea").val("");
        });

        var btnCancel3 = $('<button></button>').text('Annuler')
        .addClass('btn btn-danger')
        .on('click', function () {
            $('#stepwizard3').smartWizard("reset");
            $('#myForm3').find("input, textarea").val("");
        });

        var btnCancel4 = $('<button></button>').text('AnnulerA')
        .addClass('btn btn-danger reset4')
        .on('lick', function () {
            $('#stepwizard4').smartWizard("reset");
            $('#myForm4').find("input, textarea").val("");
        });

    $('#stepwizard').smartWizard({
        selected: 0,  // Initial selected step, 0 = first step
        theme: 'arrows',
        transitionEffect: 'fade',
        lang: {
            next: 'Suivant',
            previous: 'Précedent',
        },

        toolbarSettings: {
            toolbarPosition: 'bottom',
          //  toolbarExtraButtons: [btnFinish, btnCancel]
          toolbarExtraButtons: [ btnCancel]
        },

        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }

        //  toolbarSettings :{
        // showNextButton:'true',
        //showPreviousButton:'true',
        //   toolbarExtraButtons: [
        //  $('<button></button>').text('Extra').addClass('btn btn-primary').on('click', function()
        //   {
        //       alert('custom button 1');
        //  }),
        //  ]
        //  },
        //ajaxType: "POST",
    });

    $('#stepwizard1').smartWizard({
        selected: 0,  // Initial selected step, 0 = first step
        theme: 'arrows',
        transitionEffect: 'fade',
        lang: {
            next: 'Suivant',
            previous: 'Précedent',
        },

        toolbarSettings: {
            toolbarPosition: 'bottom',
          //  toolbarExtraButtons: [btnFinish, btnCancel]
          toolbarExtraButtons: [ btnCancel]
        },

        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }
    });

    $('#stepwizard2').smartWizard({
        selected: 0,  // Initial selected step, 0 = first step
        theme: 'arrows',
        transitionEffect: 'fade',
        lang: {
            next: 'Suivant',
            previous: 'Précedent',
        },

        toolbarSettings: {
            toolbarPosition: 'bottom',
          //  toolbarExtraButtons: [btnFinish, btnCancel]
          toolbarExtraButtons: [ btnCancel]
        },

        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }
    });

    $('#stepwizard3').smartWizard({
        selected: 0,  // Initial selected step, 0 = first step
        theme: 'arrows',
        transitionEffect: 'fade',
        lang: {
            next: 'Suivant',
            previous: 'Précedent',
        },

        toolbarSettings: {
            toolbarPosition: 'bottom',
          //  toolbarExtraButtons: [btnFinish, btnCancel]
          toolbarExtraButtons: [ btnCancel]
        },

        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }
    });

    $('#stepwizard4').smartWizard({
        selected: 0,  // Initial selected step, 0 = first step
        theme: 'arrows',
        transitionEffect: 'fade',
        lang: {
            next: 'Suivant',
            previous: 'Précedent',
        },

        toolbarSettings: {
            toolbarPosition: 'bottom',
          //  toolbarExtraButtons: [btnFinish, btnCancel]
          toolbarExtraButtons: [ btnCancel]
        },

        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }
    });

    $("#stepwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
var elmForm = $("#form-step-" + stepNumber);
// stepDirection === 'forward' :- this condition allows to do the form validation
// only on forward navigation, that makes easy navigation on backwards still do the validation when going next
elmForm.validator('validate');
var elmErr = elmForm.children('.has-error');
if(elmErr && elmErr.length > 0){
// Form validation failed
return false;
}
return true;
});

$("#stepwizard1").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
    var elmForm = $("#form1-step-" + stepNumber);
    // stepDirection === 'forward' :- this condition allows to do the form validation
    // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
    elmForm.validator('validate');
    var elmErr = elmForm.children('.has-error');
    if(elmErr && elmErr.length > 0){
    // Form validation failed
    return false;
    }
    return true;
    });

    $("#stepwizard2").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        var elmForm = $("#form2-step-" + stepNumber);
        // stepDirection === 'forward' :- this condition allows to do the form validation
        // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
        elmForm.validator('validate');
        var elmErr = elmForm.children('.has-error');
        if(elmErr && elmErr.length > 0){
        // Form validation failed
        return false;
        }
        return true;
        });
        
        $("#stepwizard3").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
            var elmForm = $("#form3-step-" + stepNumber);
            // stepDirection === 'forward' :- this condition allows to do the form validation
            // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
            elmForm.validator('validate');
            var elmErr = elmForm.children('.has-error');
            if(elmErr && elmErr.length > 0){
            // Form validation failed
            return false;
            }
            return true;
            });
            
            $("#stepwizard4").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
                var elmForm = $("#form4-step-" + stepNumber);
                // stepDirection === 'forward' :- this condition allows to do the form validation
                // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
                elmForm.validator('validate');
                var elmErr = elmForm.children('.has-error');
                if(elmErr && elmErr.length > 0){
                // Form validation failed
                return false;
                }
                return true;
                });
                

    $("#stepwizard").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if (stepNumber == 3) {
            $('.btn-info').removeClass('disabled');
        } else {
            $('.btn-info').addClass('disabled');
        }
    });

    $("#stepwizard1").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if (stepNumber == 3) {
            $('.btn-info').removeClass('disabled');
        } else {
            $('.btn-info').addClass('disabled');
        }
    });

    $("#stepwizard2").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if (stepNumber == 3) {
            $('.btn-info').removeClass('disabled');
        } else {
            $('.btn-info').addClass('disabled');
        }
    });

    $("#stepwizard3").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if (stepNumber == 3) {
            $('.btn-info').removeClass('disabled');
        } else {
            $('.btn-info').addClass('disabled');
        }
    });

    $("#stepwizard4").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if (stepNumber == 3) {
            $('.btn-info').removeClass('disabled');
        } else {
            $('.btn-info').addClass('disabled');
        }
    });


});


function toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(() => {
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});


jQuery(function ($) {
    // Google Maps setup
    var googlemap = new google.maps.Map(
        document.getElementById('googlemap'),
        {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    );
});


