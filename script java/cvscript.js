<script type="text/javascript">

    $(document).ready(function() {
        $(document).on('click','#sendmail',function() {
            let role = $('#contact-role option:selected').val();
            let subject = $('#contact-subject').val();
            let message = $('#contact-message').val();
            let errors = [];

            if (role == '') {
                $('#contact-role').addClass('is-invalid');
                errors.push(1);
            } else {
                $('#contact-role').removeClass('is-invalid').addClass('is-valid');
            }

            if (subject == '') {
                $('#contact-subject').addClass('is-invalid');
                errors.push(1);
            } else {
                $('#contact-subject').removeClass('is-invalid').addClass('is-valid');
            }

            if (message == '') {
                $('#contact-message').addClass('is-invalid');
                errors.push(1);
            } else {
                $('#contact-message').removeClass('is-invalid').addClass('is-valid');
            }

            if (errors.length < 1) {
                $('#sendmail').attr('href', 'mailto:johan.kasri@icloud.com?subject='+subject+'&body=role:'+role+'%0D%0A'+message);
            } else {
                $('#sendmail').removeAttr('href');
            }

        });

    });

</script>