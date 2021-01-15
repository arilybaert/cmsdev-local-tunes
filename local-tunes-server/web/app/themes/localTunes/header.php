<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>localTunes</title>
    <?php wp_head() ;?>
    <link rel="stylesheet" href="style.css">
    <style>
        * {
            margin: 0 1rem;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
        body {
            background-color: white;
        }
        header {
            background-color: blueviolet;
            padding: 1rem;
            font-size: 19pt;
            font-weight: 800;
            text-align: center;
            border-radius: 9px;
            background-color: #23B1FF;
            color: white;
        }
        a:link {
            color: white;
            text-decoration: none;
        }
        a:visited {
            color: white;
        text-decoration: none;
        }

        a:hover {
            color: white;
        text-decoration: none;
        }

        a:active {
            color: white;
        text-decoration: none;
        }
        a.a-appLink:link { 
            color: #23B1FF;
        }
        .o-post {
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
        }
        .m-post {
            /* box-shadow: 3px 4px 13px 1px rgba(0,0,0,0.43); */
            background-color: #23B1FF;
            color: #FFF795;
            width: 28%;
            border-radius: 7px;
            margin-top: 1rem;
            font-family: 'Times New Roman', Times, serif;

        }
        h3 {
            text-align: center;
            margin: 1rem;
            font-size: 16pt;
        }
        p {
            margin: 1rem;
            text-align: center;
        }
        .o-main {
            display: flex;
        }
        .o-left {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
        }
        .o-right {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .a-image {
            width: 60%;
        }
        .a-subTitle {
            font-size: 27pt;
            font-weight: 900;
            color: #23B1FF;
        }
        a.a-appLink:hover { 
            color: #23B1FF;
        }
        .a-appLink {
            background-color: #FFF795;
            color: #23B1FF;
            padding: 1rem;
            border-radius: 9px;
            margin-top: 1rem;
            text-align: center;
            font-weight: 900;
        }

        footer {
            background-color: #FFF795;
            color: #23B1FF;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2rem 0;
            padding: 2rem;
            border-radius: 9px;

        }

    </style>
</head>
<header id="header">
            <div class="inner">
                <a href="<?php echo get_home_url(); ?>" class="logo">
                    <?php
                    $custom_logo_id = get_theme_mod( 'custom_logo' );
                    $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
                    
                    if ( has_custom_logo() ) {
                            echo '<img src="'  . $logo[0] . '" alt="' . get_bloginfo( 'name' ) . '">';
                    } else {
                            echo get_bloginfo( 'name' );
                    }
                    ?>
                </a>
                
                <nav id="nav">
                    <?php 
                        $locations = get_nav_menu_locations();
                        $menuId = $locations['primary'];
                        $primaryNav = wp_get_nav_menu_items($menuId);
                        foreach($primaryNav as $menuItem) :
                    ?>
                    <a href="<?php echo $menuItem->url; ?>">
                        <?php echo $menuItem->title; ?>
                    </a>
                <?php endforeach; ?>
                </nav>
            </div>
        </header>
<body>
