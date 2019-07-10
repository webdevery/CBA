$(document).ready(function () {
  custom();
  sliders();
  animate();
})
custom = function () {

  short_text = function () {
    $('.cases .item').each(function () {
      var text_temp = $(this).find('p.two').text(),
        temp = ($(this).index() + 1) % 12
      console.log($(this).index())
      if (temp == 2 || temp == 8 || temp == 10) {
        sliced = text_temp.slice(0, 170)
      } else {
        sliced = text_temp.slice(0, 80)
      }

      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })


    $('.list_news_sub .item').each(function () {
      var text_temp = $(this).find('p.two').text(),
        temp = ($(this).index() + 1) % 12
      console.log($(this).index())
      if (temp == 1 || temp == 7 || temp == 9) {
        sliced = text_temp.slice(0, 200)
      } else {
        sliced = text_temp.slice(0, 110)
      }

      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
    $('.read_yet .list .item').each(function () {
      var text_temp = $(this).find('p.two').text();
      sliced = text_temp.slice(0, 110)
      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
    $('.list_news .list .item').each(function () {
      var text_temp = $(this).find('p.two').text(),
        temp = ($(this).index() + 1) % 12
      console.log($(this).index())
      if (temp == 1 || temp == 7 || temp == 9) {
        sliced = text_temp.slice(0, 200)
      } else {
        sliced = text_temp.slice(0, 110)
      }

      if (sliced.length < text_temp.length) {
        sliced += '...';
      }
      $(this).find('p.two').text(sliced)
    })
  }
  drop_down_init = function () {
    $('.dropdown-wrapper .block').click(function () {
      if ($(this).parent().hasClass('active')) {
        $('.dropdown-wrapper ').removeClass('active')
        $(this).parent().find('.list').height(31)
        setTimeout(function () {
          $('.dropdown-wrapper .list').addClass('hide')
        }, 300)
      } else {
        var Height_temp = 0;
        $(this).parent().find('.list li a').each(function () {
          temp = $(this).height()
          if (!$(this).parent().hasClass('hide'))
            Height_temp += temp + 12;
        })
        $(this).parent().addClass('active')
        $(this).parent().find('.list').height(Height_temp).removeClass('hide')
      }
    })
    $('.dropdown-wrapper .list li').click(function () {
      $('.dropdown-wrapper ').removeClass('active')
      $(this).parent().height(43)
      setTimeout(function () {
        $('.dropdown-wrapper .list').addClass('hide')
      }, 300)
      $('.dropdown-wrapper .list li').removeClass('hide')
      $(this).parent().parent().find('.block .selected').html($(this).html());
      $(this).addClass('hide')
    })
  }
  forms = function () {
    $('input[type="file"]').change(function () {
      var value = $("input[type='file']").val(),
        size = this.files[0].size,
        pos = -1,
        index = 0;
      while ((pos = value.indexOf('\\', pos + 1)) != -1) {
        index = pos;
      }
      value = value.slice(index + 1, value.length)
      text = value + '<span class="size">' + Math.round((size / 1024 / 1024 * 1000)) / 1000 + 'mB</span>'

      $(this).parent().find('label').html(text);
      $(this).parent().addClass('load')
    });
    $(document).on('submit', '.contacts form', function (e) {
      e.preventDefault()
      var name = $(this).find('input[name=name]'),
        phone = $(this).find('input[name=phone]'),
        mail = $(this).find('input[name=mail]'),
        text = $(this).find('textarea[name=text]'),
        file = $(this).find('input[name=file]'),
        pp = $(this).find('input[name=pp]:checked').length,
        error = 0;
      $(this).find('input,textarea').parent().removeClass('error')

      if (mail.val() == "" || !mail_right(mail.val())) {
        error++
        mail.parent().addClass('error')
      }
      if (name.val() == "") {
        error++
        name.parent().addClass('error')
      }
      if (phone.val() == "") {
        error++
        phone.parent().addClass('error')
      }
      if (text.val() == "") {
        error++
        text.parent().addClass('error')
      }
      if (pp == 0) {
        error++
        $(this).find('input[name=pp]').parent().addClass('error')
      }
      if (error == 0) {

      } else {
        return false;
      }
    })
  }
  questions_open = function () {
    $('.license-quest .block .item.active').each(function () {
      var item = $(this);
      var height_temp = item.find('.head').height()
        + parseFloat(item.find('.head').css('padding-top').replace('px', ''))
        + parseFloat(item.find('.head').css('padding-bottom').replace('px', ''))
        + item.find('.text').height()
        + parseFloat(item.find('.text').css('padding-top').replace('px', ''))
        + parseFloat(item.find('.text').css('padding-bottom').replace('px', ''));
      item.css('height', height_temp + 15)
    })
    $('.license-quest .block .item:not(.active)').each(function (item) {
      var item = $(this);
      var height_temp = item.find('.head').height()
        + parseFloat(item.find('.head').css('padding-top').replace('px', ''))
        + parseFloat(item.find('.head').css('padding-bottom').replace('px', ''))
      item.css('height', height_temp)
    })
    $('.license-quest .block .item').each(function () {
      var item = $(this);
      item.find('.close').click(function () {
        if (item.hasClass('active')) {
          item.removeClass('active')
          item.attr('style', '')
          var height_temp = item.find('.head').height()
            + parseFloat(item.find('.head').css('padding-top').replace('px', ''))
            + parseFloat(item.find('.head').css('padding-bottom').replace('px', ''))
          item.css('height', height_temp)
        } else {
          item.addClass('active')
          var height_temp = item.find('.head').height()
            + parseFloat(item.find('.head').css('padding-top').replace('px', ''))
            + parseFloat(item.find('.head').css('padding-bottom').replace('px', ''))
            + item.find('.text').height()
            + parseFloat(item.find('.text').css('padding-top').replace('px', ''))
            + parseFloat(item.find('.text').css('padding-bottom').replace('px', ''));
          item.css('height', height_temp)
        }
      })
    })
  }
  questions_open();
  drop_down_init();
  short_text();
  forms();

  if ($('input[name=phone]').length > 0) {
    $('input[name=phone]').mask("+7 (999) 99-99-999");
  }
  function mail_right(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  }
};
sliders = function () {
  sliders_init = function () {
    sliders_with_layers = function () {
      var resp = [
        {
          breakpoint: 850,
          settings: {
            fade: false,
            dots: false,
          }
        }
      ]
      $('.brends .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        dots: true,
        fade: true,
        responsive: resp
      });
      $('.ambassador-achievement .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        fade: true,
        responsive: resp
      })
      $('.project-slider .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        fade: true,
        responsive: resp
      })

    }
    $('.about-podhod .slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    })
    $('.about-advantage .slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1000,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    })
    $('.project-recomendation .left .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      vertical: true,
      verticalSwiping: true,
      infinite: false
    })
    $('.project-recomendation .right .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      swipe: false,
      vertical: true,
      infinite: false
    })
    $('.license-opportun .slider.one').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      infinite: false,
      arrows: false
    })
    $('.license-opportun .slider.two').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      swipe: false,
      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            swipe: true,
          }
        }
      ]
    })
    sliders_for_mobile = function () {
      if ($(window).width() < 769) {
        $('.cases .content .block').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          infinite: false,
          arrows: false,
        })
      }
      if ($(window).width() < 1025) {
        $('.read_yet .list').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          infinite: false,
          arrows: false
        })
        $('.integration .row').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          infinite: false,
          arrows: false
        })
      }
    }
    $(window).resize(function () {
      sliders_for_mobile()
    })
    sliders_for_mobile();
    sliders_with_layers();
  }
  sliders_init_before = function () {
    $('.brends .slider').on('init', function () {
      var i = 0;
      $('.brends .slider .slick-slide').each(function () {
        item = $(this).find('.item .text p.one')
        if (!$(this).hasClass('slick-cloned')) {
          $('.brends .slider').find('.slick-dots button').eq(i).html(item.text())
          i++;
        }
      })
    })
    $('.project-recomendation .left .slider').on('init', function () {
      var i = 0;
      $('.project-recomendation .left .slider .slick-slide').each(function () {
        if (/* !$(this).hasClass('slick-cloned') */1) {
          if (i == 0) {
            $(this).find('.item').addClass('current')
          } else if (i == 1) {
            $(this).find('.item').addClass('next')
          } else if (1 == 2) {
            $(this).find('.item').addClass('next-next')
          }
          i++;
        }
      })
    })

  }
  sliders_init_after = function () {
    var sliders = [//для анимации переключения
      $('.brends .slider'),
      $('.project-slider .slider'),
      $('.ambassador-achievement .slider')
    ]
    sliders.forEach(function (item) {
      item.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        item.find('.item').eq(currentSlide).addClass('current');
      })
      item.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        item.find('.item').removeClass('current');
      })
    })

    $('.license-opportun .slider.one').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.license-opportun .slider.two').slick('slickGoTo', nextSlide)
    })
    $('.license-opportun .slider.two').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.license-opportun .slider.one').slick('slickGoTo', nextSlide)
    })

    $('.project-recomendation .left .slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.project-recomendation .right .slider').slick('slickGoTo', nextSlide)
      $('.project-recomendation .left .slider').find('.item')

        .removeClass('current')
        .removeClass('pre')
        .removeClass('pre-pre')
        .removeClass('next')
        .removeClass('next-next');
      var cur, next, next_next, pre, pre_pre;
      cur = nextSlide
      pre = cur - 1
      pre_pre = cur - 2
      next = cur + 1
      next_next = cur + 2
      if (nextSlide == 0) {
        pre = slick.slideCount - 1
        pre_pre = slick.slideCount - 2
      }
      if (nextSlide == 1) {
        pre_pre = slick.slideCount - 1
      }
      if (nextSlide == slick.slideCount - 1) {
        next = 0
        next_next = 1
      }
      if (nextSlide == slick.slideCount - 2) {
        next_next = 0
      }
      var i = 0;
      $('.project-recomendation .left .slider .slick-slide').each(function () {
        if (1/* !$(this).hasClass('slick-cloned') */) {
          if (i == pre_pre) {
            $(this).find('.item').addClass('pre-pre')
          } else if (i == pre) {
            $(this).find('.item').addClass('pre')
          } else if (i == cur) {
            $(this).find('.item').addClass('current')
          } else if (i == next) {
            $(this).find('.item').addClass('next')
          } else if (i == next_next) {
            $(this).find('.item').addClass('next-next')
          }
          i++;
        }
      })
    })
  }

  sliders_init_before();
  sliders_init();
  sliders_init_after();
}
animate = function () {
  graph = function () {
    function create() {
      var canvasBody = document.createElement('canvas');
      canvasBody.width = $('.graph').width();
      canvasBody.height = (30 + $('.graph ul.rows').height());
      $('.graph').append(canvasBody)
      $('.graph canvas').attr('id', 'graph')
    }
    create()
    var canvasBody = document.getElementById('graph'),
      canvas = canvasBody.getContext("2d"),
      data,
      max_value,
      min_value,
      w, h,
      width_col,
      correct_left,
      correct_bot,
      gradient,
      particles,
      opts = {
        object: {
          radius_big: 15,
          opacity_big: 0.2,
          radius_small: 4.5,
          stroke_width: 0.5,
          color: '#45e3f1',
          color_big: 'rgba(69, 227, 241,0.2)',
          step: 1,
          background: 'linear-gradient(to top,  0%, rgba(69, 227, 241, 0) 1%,  100%)',
        },
        canvas: {
          bgc: "#fff",
        }
      };
    function set_values() {
      canvasBody.width = $('.graph').width();
      canvasBody.height = (30 + $('.graph ul.rows').height());
      data = [];
      particles = []
      $('.data-ar input').each(function () {
        data.push(parseFloat($(this).val()))
      })
      max_value = $('.data-ar').data('max') ? $('.data-ar').data('max') : data[0]
      min_value = $('.data-ar').data('min') < data[0] ? $('.data-ar').data('min') : data[0];
      for (i = 0; i < data.length; i++) {
        if (data[i] > max_value)
          max_value = data[i]
        if (data[i] < min_value)
          min_value = data[i]
      };
      w = $('#graph').width()
      h = $('#graph').height()
      width_col = $('.graph .cols li').width()
      correct_left = parseFloat($('.graph .cols').css('padding-left')) + parseFloat($('.graph .cols').css('margin-left')) + width_col / 2
      correct_bot = opts.object.radius_big
      gradient = canvas.createLinearGradient(w / 2, 0, w / 2, h)
    }

    var particle = function (x, y) {
      this.x = x;
      this.y = y;
      this.draw_small = function () {
        canvas.beginPath();
        canvas.arc(this.x, this.y, opts.object.radius_small, 0, Math.PI * 2)
        canvas.closePath();
        canvas.fillStyle = opts.object.color;
        canvas.fill();
      }
      this.draw_big = function () {
        canvas.beginPath();
        canvas.arc(this.x, this.y, opts.object.radius_big, 0, Math.PI * 2)
        canvas.closePath();
        canvas.fillStyle = opts.object.color_big;
        canvas.fill();
      }
    }
    var draw_line = function (x1, y1, x2, y2) {
      canvas.beginPath();
      canvas.moveTo(x1, y1);
      canvas.lineTo(x2, y2);
      canvas.closePath();
      canvas.strokeStyle = opts.object.color;
      canvas.lineWidth = opts.object.stroke_width;
      canvas.stroke();
    }
    var draw_polugone = function (x1, y1, x2, y2) {
      canvas.beginPath();
      canvas.moveTo(x1, y1);
      canvas.lineTo(x2, y2);
      canvas.lineTo(x2, h);
      canvas.lineTo(x1, h);
      canvas.closePath();

      gradient.addColorStop(1, "rgba(69, 227, 241, 0)")
      gradient.addColorStop(0, "rgba(31, 239, 217, 0.4)")
      canvas.fillStyle = gradient;
      canvas.fill();

    };
    var animate_graph;
    function setup() {
      cancelAnimationFrame(animate_graph)
      set_values()
      for (i = 0; i < data.length; i++) {
        var x = i * ((w - correct_left + width_col / 2) / (data.length)) + correct_left,
          y = h - 20 - (data[i] - min_value) * ((h - correct_bot * 2 - 20) / (max_value - min_value)) - correct_bot;
        particles.push(new particle(x, y));
      }
      loop()
    };
    function loop() {
      canvas.fillStyle = opts.canvas.bgc;
      canvas.fillRect(0, 0, w, h);
      for (i = 0; i < particles.length; i++) {
        particles[i].draw_big()
        particles[i].draw_small();
      }
      for (i = 1; i < particles.length; i++) {
        draw_line(
          particles[i].x, particles[i].y,
          particles[i - 1].x, particles[i - 1].y
        )
        if ($(window).width() > 768)
          draw_polugone(
            particles[i].x, particles[i].y,
            particles[i - 1].x, particles[i - 1].y
          )
      }
      if ($(window).width() > 768)
        for (i = 0; i < particles.length; i++) {
          draw_line(
            particles[i].x, particles[i].y,
            particles[i].x, h
          )
        }
      animate_graph = requestAnimationFrame(loop)
    };
    $(document).on('mousemove', 'canvas', function (e) {
      x_c = e.clientX - $(this).offset().left
      y_c = e.clientY - $(this).offset().top + $(document).scrollTop()
      console.log('aaa')
      setup()
    })
    $(window).resize(setup)
    setup();
  }
  polugone_move_on_mouse = function () {
    $('body').append('<div class="figures_click"></div>')
    var items = [],
      scroll_top = 0,
      figures_on_click = 0,
      mouse = {
        x: 0,
        y: 0
      },
      key_press = false,
      opts = {
        k_lenght_fill: 1, // коофициент дальньности взаимодействия от размера обьекта
        add_lenght_fill: 200, // дополнительная дальность взаимодействия
        start_forse: 3, // коофициент взаимодействия с курсором
        time_clear_mouse: 2000, // время сброса кооднинат курсора (мс)
        angle_step: Math.PI / 30, // угол поворота
        rotate_probability: 40, //% вероятность поворота при свободном движении 
        speed_free: 40, //скорость (пикесель в сек)
        lenght_travel: 100, // растояние для начала двидения в изначальной точке
        finish_home_from_travel: 10, //растояние прекращения возвращения
      };
    item = function (obj, x, y) {
      this.object = obj;
      this.move = { x: x || 0, y: y || 0 };
      this.forse = { y: opts.start_forse, x: opts.start_forse };
      this.width = obj.width()
      this.go_mouse = false;
      this.height = obj.height()
      this.direction = Math.random() * Math.PI * 2;
      this.filling = { x: 0, y: 0 }
      this.x;
      this.y;
      this.dx = 0
      this.dy = 0
      this.transform = '';
      this.hover = false;
      this.free = true;
      this.want_go_home = false;
      this.move_to = {
        mouse: function (item) {
          item.dx = item.filling.x * -Math.cos(item.direction) * item.forse.x
          item.dy = item.filling.y * Math.sin(item.direction) * item.forse.y
          item.moving()
        },
        free: function (item) {
          if (Math.random() + 1 * opts.rotate_probability / 100 > 1)
            item.direction += opts.angle_step * (Math.random() > 0.5 ? 1 : -1);
          item.dx = Math.cos(item.direction) / 100 * opts.speed_free
          item.dy = -Math.sin(item.direction) / 100 * opts.speed_free
          item.moving()
        },
        go_to_mouse: function (item) {
          item.set_direction(item.x - (mouse.x), item.y - (mouse.y + scroll_top))
          item.dx = Math.cos(item.direction) / 30 * opts.speed_free
          item.dy = -Math.sin(item.direction) / 30 * opts.speed_free
          item.moving()
        },
        go_home: function (item) {
          item.set_direction(item.move.x, item.move.y)
          item.dx = Math.cos(item.direction) / 100 * opts.speed_free
          item.dy = -Math.sin(item.direction) / 100 * opts.speed_free
          item.moving()
        }
      }
      this.moving = function () {
        this.cur_position()
        this.border()
        this.set_pos()
      }
      this.border = function () {
        if (this.x + this.dx - this.width / 2 > 0 && this.x + this.dx + this.width / 2 < $(window).width()) {
          this.move.x += this.dx
        } else if (this.x + this.dx + this.width / 2 > $(window).width()) {
          this.move.x -= 0.1
        } else {
          this.move.x += 0.1
        }
        if (this.y + this.dy - this.height / 2 > 0 && this.y + this.dy + this.height / 2 < $('body').height()) {
          this.move.y += this.dy
        } else if (this.y + this.dy + this.height / 2 > $('body').height()) {
          this.move.y -= 0.1
        } else {
          this.move.y += 0.1
        }
      }
      this.set_pos = function () {
        this.transform = "translate(" + this.move.x + "px," + this.move.y + "px)";
        this.object.css('transform', this.transform)
      }
      this.cur_position = function () {
        this.x = this.object.offset().left + this.width / 2;
        this.y = this.object.offset().top + this.height / 2
      }
      this.set_direction = function (x, y) {
        var gip = Math.sqrt(x * x + y * y)
        var acos = -Math.acos(x / gip) + Math.PI
        if (y < 0)
          acos = Math.PI * 2 - acos
        this.direction = acos
      }
      this.check_hover = function () {
        if (shorted(this.y - scroll_top, mouse.y, this.height * opts.k_lenght_fill - this.height / 2 + opts.add_lenght_fill)
          && shorted(this.x, mouse.x, this.width * opts.k_lenght_fill - this.width / 2 + opts.add_lenght_fill)) {
          this.hover = true
          this.set_direction(this.x - mouse.x, this.y - scroll_top - mouse.y);
          this.filling.y = round(1 - Math.abs((this.y - scroll_top - mouse.y) / (this.height * opts.k_lenght_fill - this.height / 2 + opts.add_lenght_fill)), 3)
          this.filling.x = round(1 - Math.abs((this.x - mouse.x) / (this.width * opts.k_lenght_fill - this.width / 2 + opts.add_lenght_fill)), 3)
        } else {
          this.hover = false;
        }
      }
      this.check_travel_lenght = function () {
        if (Math.sqrt(this.move.x * this.move.x + this.move.y * this.move.y) > opts.lenght_travel) {
          this.want_go_home = true
        } else if (Math.sqrt(this.move.x * this.move.x + this.move.y * this.move.y) > opts.finish_home_from_travel) {
          this.want_go_home = false
        }
      }
    }
    function ticks() {
      items.forEach(function (item) {
        item.check_hover()
        if (key_press || item.go_mouse) {
          item.move_to.go_to_mouse(item)
        } else {

          if (item.hover) {
            item.move_to.mouse(item)
          }
          else {
            item.check_travel_lenght()
            if (item.want_go_home) {
              item.move_to.go_home(item)
            } else
              item.move_to.free(item);
          }
        }
      })
    }

    $('.figure').each(function () {
      items.push(new item($(this)))
    })

    var start_anim;
    start_anim = setInterval(ticks, 10);
    var clear_mouse;

    $(document).on('mousemove', function (e) {
      clearTimeout(clear_mouse)
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      clear_mouse = setTimeout(function () {
        if (!key_press) {
          mouse.x = -10000;
          mouse.y = -10000;
        }
      }, opts.time_clear_mouse)
    })
    $(document).on('mousedown', function () {
      key_press = true;
    })
    $(document).on('mouseup', function () {
      key_press = false
    })

    /* $(document).on('click',function(e){
      if(figures_on_click < 4){
        $('.figures_click').append('<div data-id='+items.length+' class="figure_click"></div>')
        items.push(new item($('.figure_click').eq(figures_on_click),mouse.x,mouse.y+scroll_top))
        figures_on_click++;
      }
    }) */
    if ($(window).width() <= 768) {
      clearInterval(start_anim)
      $('.figure').remove();
    }
    $(document).on('scroll', function () {
      scroll_top = $(this).scrollTop();
    })
    /////////

    /////////
    shorted = function (a, b, l) {
      return (Math.abs(a - b)) < l
    }
    round = function (num, step) {
      return parseInt(num * Math.pow(10, step)) / Math.pow(10, step)
    }
  }
  hex_sphere = function () {
    var width = $('#container').innerWidth();
    var height = $('#container').innerHeight();

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xf5f5f5);
    var cameraDistance = 65;
    if ($(window).width() < 551) cameraDistance = 70
    var camera = new THREE.PerspectiveCamera(cameraDistance, width / height, 1, 200);
    camera.position.z = -cameraDistance;

    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf5f5f5, cameraDistance * .4, cameraDistance * 1.5);

    var projectionCanvas = document.createElement('canvas');

    projectionCanvas.width = width;
    projectionCanvas.height = height;

    var seenTiles = {};
    var currentTiles = [];

    var createScene = function (radius, divisions, tileSize, color, opacity) {
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
      var hexasphere = new Hexasphere(radius, divisions, tileSize);
      var material_sphere = new THREE.MeshBasicMaterial({ color: color })
      var geometry_sphere = new THREE.SphereBufferGeometry(0.2, 4, 4)
      var points_spheres = {
        x: [], y: [], z: []
      }
      function find_in_all(ar, x, y, z) {
        var find = false
        ar.x.forEach(function (item, i) {
          if (item == x && ar.y[i] == y && ar.z[i] == z) {
            find = true;
          }
        })
        return find;
      }
      for (var i = 0; i < hexasphere.tiles.length; i++) {
        var t = hexasphere.tiles[i];
        var geometry = new THREE.Geometry();
        for (var j = 0; j < t.boundary.length; j++) {
          var bp = t.boundary[j];
          geometry.vertices.push(new THREE.Vector3(bp.x, bp.y, bp.z));
          if (!find_in_all(points_spheres, bp.x, bp.y, bp.z)) {
            points_spheres.x.push(bp.x)
            points_spheres.y.push(bp.y)
            points_spheres.z.push(bp.z)
            var obj = new THREE.Mesh(geometry_sphere, material_sphere);
            obj.position.copy(new THREE.Vector3(bp.x, bp.y, bp.z));
            if ($(window).width() > 768)
              scene.add(obj)
          }
        }
        center = function (x1, y1, z1, x2, y2, z2, req, d, l) {
          var xt, yt, zt;
          xt = (x1 + x2) / 2
          yt = (y1 + y2) / 2
          zt = (z1 + z2) / 2;
          if (req > 0) {
            var item_t
            if (d != 0) {
              item_t = center(xt, yt, zt, x2, y2, z2, req - 1, d, l + 1)
            } else {
              item_t = center(x1, y1, z1, xt, yt, zt, req - 1, d, l + 1)
            }
            xt = item_t.x
            yt = item_t.y
            zt = item_t.z
          }
          return {
            x: xt,
            y: yt,
            z: zt
          }
        }
        for (var j = 0; j < t.boundary.length; j++) {
          var bp, bp_p;
          bp = t.boundary[j]
          bp_p = j < t.boundary.length - 1 ? t.boundary[j + 1] : t.boundary[0];
          var x1, y1, z1, x2, y2, z2;
          x1 = parseFloat(bp.x)
          y1 = parseFloat(bp.y)
          z1 = parseFloat(bp.z)
          x2 = parseFloat(bp_p.x)
          y2 = parseFloat(bp_p.y)
          z2 = parseFloat(bp_p.z)
          for (p = 0; p < 2; p++) {
            var item_v = center(x1, y1, z1, x2, y2, z2, 5, p, 0);
            geometry.vertices.push(new THREE.Vector3(item_v.x, item_v.y, item_v.z));
          }
        }
        if (geometry.vertices.length > 17) {
          geometry.faces.push(new THREE.Face3(7, 1, 2));
          geometry.faces.push(new THREE.Face3(7, 2, 10));
          geometry.faces.push(new THREE.Face3(9, 2, 3));
          geometry.faces.push(new THREE.Face3(9, 2, 3));
          geometry.faces.push(new THREE.Face3(9, 3, 12));
          geometry.faces.push(new THREE.Face3(11, 3, 4));
          geometry.faces.push(new THREE.Face3(11, 4, 14));
          geometry.faces.push(new THREE.Face3(13, 4, 5));
          geometry.faces.push(new THREE.Face3(13, 5, 16));
          geometry.faces.push(new THREE.Face3(15, 5, 0));
          geometry.faces.push(new THREE.Face3(15, 0, 6));
          geometry.faces.push(new THREE.Face3(17, 0, 1));
          geometry.faces.push(new THREE.Face3(17, 1, 8));
        } else {
          geometry.faces.push(new THREE.Face3(6, 1, 2));
          geometry.faces.push(new THREE.Face3(6, 2, 9));
          geometry.faces.push(new THREE.Face3(8, 2, 3));
          geometry.faces.push(new THREE.Face3(8, 3, 11));
          geometry.faces.push(new THREE.Face3(10, 3, 4));
          geometry.faces.push(new THREE.Face3(10, 4, 13));
          geometry.faces.push(new THREE.Face3(12, 4, 0));
          geometry.faces.push(new THREE.Face3(12, 0, 5));
          geometry.faces.push(new THREE.Face3(14, 0, 1));
          geometry.faces.push(new THREE.Face3(14, 1, 7));
        }

        var material = new THREE.MeshBasicMaterial({ color: color, transparent: true, wireframe: true })

        material.opacity = 1;
        var mesh = new THREE.Mesh(geometry, material.clone());
        scene.add(mesh);
        hexasphere.tiles[i].mesh = mesh;
      }
      seenTiles = {};
      currentTiles = hexasphere.tiles.slice().splice(0, 12);
      currentTiles.forEach(function (item) {
        seenTiles[item.toString()] = 1;
        item.mesh.material.opacity = 1;
      });
    };
    createScene(30, 8, 1, 0x54fbe9, 1);

    var cameraAngle = -Math.PI;
    var cameraAnglex = 0.2;
    $(document).on('mousemove', 'body', function (event) {
      var x = event.clientX
      cameraAnglex = (x - width / 2) / width / 2
    })
    var do_animate = true;
    var tick_pause = -1
    var setup = function () {
      if (do_animate && tick_pause < 0) {
        tick();
        tick_pause = 2
      }
      tick_pause--
      requestAnimationFrame(setup);
    }
    $(document).on('scroll', function () {
      do_animate = $(document).scrollTop() < $('#container').height()
    })
    var tick = function () {
      var rotateCameraBy = Math.PI / 100 * cameraAnglex;
      cameraAngle += rotateCameraBy;
      camera.position.x = cameraDistance * Math.cos(cameraAngle);
      camera.position.y = Math.sin(cameraAngle) * 10;
      camera.position.z = cameraDistance * Math.sin(cameraAngle);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }
    function onWindowResize() {
      camera.aspect = $('#container').innerWidth() / $('#container').innerHeight();
      camera.updateProjectionMatrix();
      renderer.setSize($('#container').innerWidth(), $('#container').innerHeight());
    }
    $(window).resize(onWindowResize)
    $("#container").append(renderer.domElement);
    setup()
  };
  ;
  bubbles_move_mouse = function () {
    var opts = {
      time_life: 300,//ms
      time_out: 200,//ms
      radius: 10,
      first_opacity: 0.5,
      interval_create: 2,
      lenght_create: 5
    },
      scroll_top = 0,
      mouse = {
        x: -500, y: -500
      },
      bubbles = [],
      bubble = function (x, y, obj) {
        this.x = x;
        this.y = y;
        this.xml_id = x * y * Math.random()
        this.obj = obj;
        this.opacity = opts.first_opacity;
        this.time_life = opts.time_life;
        this.color = opts.color;
        this.radius = opts.radius;
        var start_death = false;
        this.show = function () {
          this.obj.css('width', this.radius * 2)
          this.obj.css('height', this.radius * 2)
          this.obj.css('opacity', this.opacity)
          this.obj.css('top', this.y + 1/* - this.radius */)
          this.obj.css('left', this.x - this.radius)
          this.hide()
        }
        this.hide = function () {
          var item = this;
          this.obj.animate({
            opacity: 0,
            height: 0,
            width: 0,
            left: item.x,
            top: item.y
          }, this.time_life)
          setTimeout(function () {
            item.remove_it()
          }, this.time_life)
        }
        this.remove_it = function () {
          this.obj.remove()
          var it = this, id_t = 0
          bubbles.forEach(function (item, i) {
            if (item.id == it.id) {
              id_t = i
            }
          })
          bubbles.splice(id_t, 1);
        }
      };
    var item_create = false, clear_mouse, index_item = 0, hover_a = false;
    $('body').append('<div class="mouse_fig"></div>')
    var tick_bubb = function () {
      if (item_create && !hover_a) {
        $('.mouse_fig').append('<div id="it' + index_item + '" class="fig"></div>')
        bubbles.push(new bubble(mouse.x, mouse.y + scroll_top, $('#it' + index_item)))
        index_item++
        bubbles.forEach(function (item) {
          if (!item.start_death) {
            setTimeout(() => {
              if (Math.sqrt((item.x - mouse.x) * (item.x - mouse.x) + (item.y - mouse.y - scroll_top) * (item.y - mouse.y - scroll_top)) > opts.lenght_create)
                item.show()
              else {
                item.hide()
              }
            }, opts.time_out);
            item.start_death = true;
          }
        })
      }
    }

    setInterval(tick_bubb, opts.interval_create);
    $(document).on('mousemove', function (e) {
      /* if($('a,p,h1,h2,h3,h4,h5,h6,span,input,label,select,button').is(e.target)){
        hover_a = true
      }else{
        hover_a = false
      } */
      clearTimeout(clear_mouse)
      item_create = true
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      clear_mouse = setTimeout(function () {
        item_create = false
      }, 2000)
    })
    $(document).on('scroll', function () {
      scroll_top = $(this).scrollTop();
    })
  }

  hex_sphere()
  polugone_move_on_mouse();
  bubbles_move_mouse();

  if ($('.graph').length > 0) graph();
}

