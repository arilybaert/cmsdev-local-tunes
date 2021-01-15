<?php get_header() ;?>
<div class="o-main">
    <div class="o-left">
        <img src="http://local-tunes-server.test/app/uploads/2021/01/mockup.png" alt="" class="a-image">
    </div>

    <div class="o-right">
        <h2 class="a-subTitle">Eye catching sleek design & aims to give local artists a broader audience</h2>
        <a href="http://www.arilybaert.com" class="a-appLink">Vist the web app!</a>
    </div>
    
</div>
<div class="o-post">
    <?php 
        if ( have_posts() ) : 
        while ( have_posts() ) : the_post(); 
        ?>
            <article class="m-post">
                <h3><?php the_title(); ?></h3>
                <img class="a-post-image" src="<?php the_field('image'); ?>" />
                <?php the_excerpt(); ?>
            </article>
            <?php 
        // Display post content
        endwhile; 
        endif; 
        ?>
</div>

<?php get_footer() ;?>
</body>
</html>