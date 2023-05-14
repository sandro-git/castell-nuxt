<template>
  <div>
    <nav>
      <div
        class="flex justify-center items-center"
      >
        <nuxt-link
          to="/"
          class="w-1/6     block m-4 "
        >
          <nuxt-img 
            src="/logo.png" 
            alt="Le Castell"
          />
        </nuxt-link>
      </div>
      <div class="flex justify-around w-1/2 mx-auto">
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="./menu_card.html">
          Menus
        </nuxt-link>
        <nuxt-link to="./wine_card.html">
          Vins
        </nuxt-link>
        <nuxt-link to="./drinks.html">
          Cocktails et Boissons
        </nuxt-link>
        <nuxt-link to="./photos.html">
          Photos
        </nuxt-link>
        <nuxt-link to="./contact">
          Contact
        </nuxt-link>
      </div>
    </nav>

    <header class="">
      <h1
        class="text-3xl font-bold text-center"
      >
        Bienvenue
      </h1>
      <h4 class=" text-xl text-center">
        Ouvert tous les jours à partir de 19h30
      </h4>
    </header>

    <main>
      <div class="slideshow-container">
        <div class="slide active">
          <nuxt-img src="/salade.jpg">
            <div class="box">
              <p>Salade de saison</p>
            </div>
          </nuxt-img>
        </div>
                
        <div class="slide">
          <nuxt-img src="/viande.jpg">
            <div class="box">
              <p>Brochette de viandes</p>
            </div>
          </nuxt-img>
        </div>
                
        <div class="slide">
          <nuxt-img src="/dessert-1.jpg">
            <div class="box">
              <p>Crème catalane</p>
            </div>
          </nuxt-img>
        </div>
      </div>
    </main>

        

    <footer>
      <h1>Nos services</h1>
      <div class="services">
        <div class="service">
          <h3>Livraison gratuite</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, alias praesentium sapiente est debitis eos saepe illum, sed dolorum necessitatibus repudiandae tempore id? Sunt adipisci, voluptatum vel veritatis facilis esse!</p>
        </div>
        <div class="service">
          <h3>Paiement en ligne</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, alias praesentium sapiente est debitis eos saepe illum, sed dolorum necessitatibus repudiandae tempore id? Sunt adipisci, voluptatum vel veritatis facilis esse!</p>
        </div>
        <div class="service">
          <h3>Aimé ou remboursé</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, alias praesentium sapiente est debitis eos saepe illum, sed dolorum necessitatibus repudiandae tempore id? Sunt adipisci, voluptatum vel veritatis facilis esse!</p>
        </div>
      </div>

      <p id="contact">
        Contact : 04 68 80 72 08 | &copy; 2023, Le Castell
      </p>
    </footer>
  </div>
</template>
