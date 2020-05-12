<template>
  <section id="content">
    <div class="container">
      <div
        class="first-page-top mb-30px"
        style="background-image: url('images/tmp/ft1.jpg')"
      >
        <img class="fp-image" src="images/tmp/ft1.jpg" alt="" />
        <div class="fpt-top">
          <router-link
            :to="{ name: 'Home' }"
            class="btn-transparent"
            v-for="item in main_categories"
            :key="item.id"
          >
            {{ item.title }}
          </router-link>
        </div>
        <!--fpt-top-->
        <div class="fpt-center">
          <div class="row">
            <div class="offset-sm-2 col-sm-8">
              <div class="fpt-title h1 mb-30px">
                Grobe Auswahl, grobe Freude
              </div>
              <p>
                Entdecke über 1900 Marken und lass dich modisch inspirieren.
                Bestelle einfach und bequem nach Hause - mit unserem kostenlosen
                Versand & Rückversand.
              </p>
            </div>
          </div>
          <!--row-->
        </div>
        <!--fpt-center-->
      </div>
      <!--first-page-top-->
      <div class="fpt-content mb-40px">
        <h5>Mit dem Zalando Online Shop durch den Winter</h5>
        <p>
          It’s gettin’ serious? Dann müssen die neuen Job-Looks her. Die wirken
          nicht streng, sondern smart, haben eine klassische Basis und trendy
          Details. Zum Beispiel: Blusen und Hemden im Herrenstil mit Schluppen,
          Raffungen oder Rüschen. Die besten Kollegen? Schicke Stoffhosen in
          Edelfarben – entweder richtig weit im Marlene-Stil geschnitten oder
          schmal und cropped, gerne auch leicht verspielt mit Volantsaum. Als
          Business-Boost kommen Samtblazer richtig gut – dieser ist schließlich
          der Stoff der Stunde. Seidige Schaltücher, offen oder als Schleife
          gebunden, bringen Girlboss-Power ins Büro, quasi als feminines Pendant
          zur Krawatte. Und wenn ein wichtiges Meeting ansteht, geben
          Hosenanzüge das nötige Empowerment – mit entspannter Passform und
          betonten Schultern.
        </p>
        <h5>MONTAG: Brillante Schuh-Styles für einen tollen Start</h5>
        <p>
          Mit dem Feierabend fällt der Startschuss zur lang ersehnten Leisure
          Time. No work, just fun – das gehört natürlich zelebriert. Also her
          mit den Feier-Styles! Drei Outfit-Inspos: 1. ein Wickelkleid mit Leo
          Print, dazu Wildleder-Overknees. 2. ein Statement Shirt zum Satin-
          oder Chiffonrock in #millennialpink mit Fransen oder Plissées. 3. eine
          Bikerjacke in Gold- oder Silbermetallic zur Cropped-Jeans. Celebrate
          good times!
        </p>
        <h5>SAMSTAG: Trend-Styles mit Hygge-Approach</h5>
        <p>
          Easy Like Sunday Morning: Strickpullis und Cardigan Coats umhüllen
          jetzt voluminös, oversized mit überlangen Ärmeln, stretched-out oder
          deconstructed mit losen Wollfäden. Was dazu passt? Slouchy Pants
          beispielsweise, aber auch Röcke aus hauchzarten Stoffen wie Chiffon
          sind als feiner Bruch top zur neuen Masche. Und Schuhe, die
          gleichzeitig bequem und cool sind – wie Chelsea Boots mit hohem
          Schaft, Stiefel im Cowboy Look mit Metallkappe oder Laced-up Boots mit
          Profilsohle.
        </p>
      </div>
      <div class="fpt-list mb-45px">
        <h5>Top Marken</h5>
        <div class="row">
          <div class="col-sm-2">
            <ul class="list-unstyled">
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="list-unstyled">
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="list-unstyled">
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="list-unstyled">
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
            </ul>
          </div>
          <div class="col-sm-2">
            <ul class="list-unstyled">
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
              <li><a href="#">Abercrombie & Fitch</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--container-->
  </section>
  <!--content-->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "index",
  computed: {
    ...mapGetters({ main_categories: "category/getMain" })
  }
};
</script>

<style></style>
