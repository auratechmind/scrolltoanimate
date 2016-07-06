# SCROLLTOANIMATE
  A simple jquery for animate when you scroll
  
## Features
  - Animate elements, images, etc.
  - Set animation duration. 
  - Set animation delay
  - Easy to use.
  - Use Animate.css

## Installation
1. ADD animate.css in Header

2. ADD scroll-animate.js in Footer
  
2. First add Target Class (.target) in Main div OR Parent div.
   
    ```
    <div class="target">
		<div class="detail-section"> 
		...
		</div>
	</div>
   ```
    
3. Create new folder called `Modules` inside app directory.
4. Add `Blog` folder inside Modules directory. App directory structure look like this:

   ```
      app/
      |---Modules
          |---Blog
              |---Assets
              |---Components
              |---Controllers
              |---Middleware
              |---Migrations
              |---Models
              |---Views
              |---BlogServiceProvider.php
              |---routes.php
          |---ModulesServiceProvider.php
   ```
   
   
5. Head to the Modules directory and add a file called `ModulesServiceProvider.php`
6. Run Migrations. For that use following command.

   ```
	$ php artisan migrate --path app/Modules/Blog/Migrations
   ```
   (Role column will be added into your users table. That will be define which user has author/admin role. You can change table name as per your requirement.)
7. Add following methods into app/User.php 

   ```
    /**
     * user has many posts
     * @return type
     */
    public function posts()
    {
        return $this->hasMany('App\Modules\Blog\Models\Posts', 'author_id');
    }

    /**
     * user has many comments
     * @return type
     */
    public function comments()
    {
        return $this->hasMany('App\Modules\Blog\Models\Comments', 'from_user');
    }

    /**
     * Check if user can post blog
     * @return boolean
     */
    public function can_post()
    {
        $role = $this->role;
        if ($role == 'author' || $role == 'admin') {
            return true;
        }
        return false;
    }

    /**
     * Check if user is admin
     * @return boolean
     */
    public function is_admin()
    {
        $role = $this->role;
        if ($role == 'admin') {
            return true;
        }
        return false;
    }
   ```
	

8. To set facebook API key open up Blog/Views/layouts/app.blade.php and
    set 

   ```
    appId      : 'your app id',
   ``` 
   in line number 8.
9. To get twitter count register your domain on any APIs which providers twitter count. Open up Blog/Views/posts/show.blade.php and
    set Provided path to

   ```
    data-via : 'Your domain path'
   ``` 	   
   in line number 187.
10. For Routes you can add/update in Blog/routes.php
   (Blog module has its own routes.php so you can add/update routes here.)

11. Please run `composer dump-autoload`, if you come across any Class not found exceptions and you haven’t done anything wrong

#### Note:
This module is tested in fresh copy of laravel 5. If you have customised your application then please change as per your application.

## Demo
http://plugins.auratechmind.net/laravel-blog/public/

## Discussion
http://auratechmind.net/question/category/laravel-blog/

## Credit
https://opensharecount.com/

https://developers.facebook.com/

http://www.findalltogether.com/tutorial/simple-blog-application-in-laravel-5/

