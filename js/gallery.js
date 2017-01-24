/**
 * Created by alomalo on 2/23/2016.
 */

//for single project image sets use only the first part


//remember that imageset definition selects everything with .project_img class in something with container class

var currentIndex_img = 0,
    currentIndex_proj = 0,
    //imageset = $('.container div'),
    //imageset = $('' + currentIndex_proj),
    //imageset = $("#2 div"),
    projects = $('.container'),
    projectAmt = projects.length;

function imageset(n) {
    return ($('#' + n + ' .project_img'));
}

//cycles through imageset created in cycleProjects

function cycleImages() {
    var image = imageset(currentIndex_proj).eq(currentIndex_img);
    imageset(currentIndex_proj).hide();
    //image.css("display","inline-block");
    image.fadeIn("slow");
}

//next image

$('.n').click(function() {
    currentIndex_img += 1;
    if (currentIndex_img > imageset(currentIndex_proj).length - 1) {
        currentIndex_img = 0;
    }
    //imageset = $('#' + currentIndex_proj + ' div');
    cycleImages();
});

//previous image

$('.p').click(function() {
    currentIndex_img -= 1;
    if (currentIndex_img < 0) {
        currentIndex_img = imageset(currentIndex_proj).length - 1;
    }
    //imageset = $('#' + currentIndex_proj + ' div');
    cycleImages();
});

//for projects sets

function cycleProjects() {
    var project = $('.container').eq(currentIndex_proj);
    projects.hide();
    project.css("display","inline-block");
    imageset(currentIndex_proj).hide();
    var firstImage = imageset(currentIndex_proj).eq(0);
    //firstImage.css("display","inline-block");
    firstImage.fadeIn("slow");
}

//next project

$('.nn').click(function() {
    currentIndex_img = 0;
    currentIndex_proj += 1;
    if (currentIndex_proj > projectAmt - 1) {
        currentIndex_proj = 0;
    }
    cycleProjects();
});

//previous project

$('.pp').click(function() {
    currentIndex_img = 0;
    currentIndex_proj -= 1;
    if (currentIndex_proj < 0) {
        currentIndex_proj = projectAmt - 1;
    }
    cycleProjects();
});


$('#work_list').find('p').click(function() {
    currentIndex_proj = $(this).prevAll('p').length;
    cycleProjects();
});


