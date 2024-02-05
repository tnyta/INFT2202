function() {
    // test1()
    test2();

    function test1() {
        const jqele = $('.red-box')
        console.log(jqele),

        jqele
             .removeClass('red-box')
             .addClass('blue-box');

    }

    function test2() {
        const jq = $('#content > p');
        console.log(jq[1]);
        console.log($(jq[1]).text());

        jqele
             .removeClass('red-box')
             .addClass('blue-box');

    }

    function test3() {
        $('.red-box').on("click", function(event) {
            alert('this is a red box');
        })

    }
    
    function test4() {
        const newele = $('<p></p>')
        .text('this was created with jq also')
        .addClass('emapasize');

        $('#test-box')
        .append('<p>i added this with jq </p>')
        .append(newele);


    function test5() {
        $("input[name=submit]").on('click', e => {
            e.preventDefault();
            e.stopPropagation();
            const email = $('foam#test-foam input[type]')
            alert(email);
        })


    }
    }



}();   