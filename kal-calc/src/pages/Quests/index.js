import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from './Quests.module.css'
import foto from '../../pages/Home/dungeon-redondo.png'
import world from '../../pages/Home/world-redondo.png'
import quests from '../../pages/Home/quests.png'
import training from '../../pages/Quests/1_training_center.png'
import npc2 from '../../pages/Quests/2_chun_sooin.png'
import demonplunderer from '../../pages/Quests/3_demon_plunderer.png'
import chiefguard from 'kal-calc/src/pages/Quests/5_demon_scout.png'
import demonscout from 'kal-calc/src/pages/Quests/5_guard_narooth.png'
import shinwoo from 'kal-calc/src/pages/Quests/7_shin_woo.png'
import demoninfantry from 'kal-calc/src/pages/Quests/8_demon_infantry.png'
import demonsoldier from 'kal-calc/src/pages/Quests/8_demon_soldier.png'
import demonthrowingsoldier from 'kal-calc/src/pages/Quests/8_demon_throwing_soldier.png'
import yeonwoo from 'kal-calc/src/pages/Quests/11_yeon_woo.png'
import demonflagbearer from 'kal-calc/src/pages/Quests/12_demon_flag_bearer.png'
import demonshocktrooper from 'kal-calc/src/pages/Quests/12_demon_shock_trooper.png'
import ferociousdemonflagbearer from 'kal-calc/src/pages/Quests/12_ferocious_demon_flag_bearer.png'
import ferociousdemonshocktrooper from 'kal-calc/src/pages/Quests/12_ferocious_demon_shock_trooper.png'
import jinphill from 'kal-calc/src/pages/Quests/15_jin_phill.png'
import demonarmoredknight from 'kal-calc/src/pages/Quests/16_demon_armored_knight.png'
import demonband from 'kal-calc/src/pages/Quests/16_demon_band.png'
import demoncommander from 'kal-calc/src/pages/Quests/16_demon_commander.png'
import demonmadknight from 'kal-calc/src/pages/Quests/16_demon_mad_knight.png'
import jaehyeok from 'kal-calc/src/pages/Quests/19_jae_hyeok.png'
import elitedemoncommander from 'kal-calc/src/pages/Quests/20_elite_demon_commander.png'
import elitedemonmadknight from 'kal-calc/src/pages/Quests/20_elite_demon_mad_knight.png'
import yeoncheol from 'kal-calc/src/pages/Quests/23_yeon_cheol.png'
import bighandedinhabitant from 'kal-calc/src/pages/Quests/24_big_handed_inhabitant.png'
import bighandedslave from 'kal-calc/src/pages/Quests/24_big_handed_slave.png'
import despairbighandedbluewarrior from 'kal-calc/src/pages/Quests/24_despair_big_handed_blue_warrior.png'
import despairbighandedredwarrior from 'kal-calc/src/pages/Quests/24_despair_big_handed_red_warrior.png'
import demonwaterdragoncommanderthechained from 'kal-calc/src/pages/Quests/32_demon_water_dragon_commander_the_chained.png'
import demonwaterdragonpredatorthechained from 'kal-calc/src/pages/Quests/32_demon_water_dragon_predator_the_chained.png'
import demonwaterdragonthechained from 'kal-calc/src/pages/Quests/32_demon_water_dragon_the_chained.png'
import hungrydemonwaterdragonchained from 'kal-calc/src/pages/Quests/32_hungry_demon_water_dragon_chained.png'
import leehwa from 'kal-calc/src/pages/Quests/35_lee_hwa.png'
import assaultdemoninfantry from 'kal-calc/src/pages/Quests/36_assault_demon_infantry.png'
import assaultdemonthrowingsoldier from 'kal-calc/src/pages/Quests/36_assault_demon_throwing_soldier.png'
import assaultdemonarmoredknight from 'kal-calc/src/pages/Quests/40_assault_demon_armored_knight.png'
import assaultdemon_band from 'kal-calc/src/pages/Quests/40_assault_demon_band.png'
import macheol from 'kal-calc/src/pages/Quests/43_ma_cheol.png'
import castoffbabyghost from 'kal-calc/src/pages/Quests/44_castoff_baby_ghost.png'
import ghostofyoungman from 'kal-calc/src/pages/Quests/44_ghost_of_young_man.png'
import haejin from 'kal-calc/src/pages/Quests/47_hae_jin.png'
import ghostofblacksmith from 'kal-calc/src/pages/Quests/48_ghost_of_black_smith.png'
import ghostofguard from 'kal-calc/src/pages/Quests/48_ghost_of_guard.png'
import ghostofyoungwoman from 'kal-calc/src/pages/Quests/48_ghost_of_young_woman.png'
import yeonseok from 'kal-calc/src/pages/Quests/51_yeon_seok.png'
import fellowtravelertotheotherworld from 'kal-calc/src/pages/Quests/52_fellow_traveler_to_the_other_world.png'
import sealedghosttroop from 'kal-calc/src/pages/Quests/52_sealed_ghost_troop.png'
import kang_chan from 'kal-calc/src/pages/Quests/55_kang_chan.png'
import seasidedemonwatercommander from 'kal-calc/src/pages/Quests/56_seaside_demon_water_commander.png'
import seasidedemonwaterdragonpredator from 'kal-calc/src/pages/Quests/56_seaside_demon_water_dragon_predator.png'
import seasidehungrydemonwaterdragon from 'kal-calc/src/pages/Quests/56_seaside_hungry_demon_water_dragon.png'
import wongoon from 'kal-calc/src/pages/Quests/59_won_goon.png'
import fellowtravelertotheotherworldthechained from 'kal-calc/src/pages/Quests/60_fellow_traveler_to_the_other_world_the_chained.png'
import ghostofguardthechained from 'kal-calc/src/pages/Quests/60_ghost_of_guard_the_chained.png'
import sealedghostoftroopthechained from 'kal-calc/src/pages/Quests/60_sealed_ghost_of_troop_the_chained.png'
import devilsoldierwithbow from 'kal-calc/src/pages/Quests/64_devil_soldier_with_bow.png'
import devilsoldierwithsword from 'kal-calc/src/pages/Quests/64_devil_soldier_with_sword.png'
import devilsoldierwithtwinblades from 'kal-calc/src/pages/Quests/64_devil_soldier_with_twin_blades.png'
import devilsoldier from 'kal-calc/src/pages/Quests/64_devil_soldier.png'
import stand2nddevilmonster from 'kal-calc/src/pages/Quests/68_1st_and_2nd_devil_monster.png'
import devilsoldierwithspear from 'kal-calc/src/pages/Quests/68_devil_soldier_with_spear.png'
import jaewon from 'kal-calc/src/pages/Quests/71_jae_won.png'
import deviltroopofdesire from 'kal-calc/src/pages/Quests/72_devil_troop_of_desire.png'
import doggebiofmonsterface from 'kal-calc/src/pages/Quests/72_doggebi_of_monster_face.png'
import guardiandoggebi from 'kal-calc/src/pages/Quests/72_guardian_doggebi.png'
import myeonghwan from 'kal-calc/src/pages/Quests/75_myeong_hwan.png'
import deviltroopofgreed from 'kal-calc/src/pages/Quests/76_devil_troop_of_greed.png'
import deviltroopofpain from 'kal-calc/src/pages/Quests/76_devil_troop_of_pain.png'
import doggebiwithagong from 'kal-calc/src/pages/Quests/76_doggebi_with_a_gong.png'
import drunkendoggebi from 'kal-calc/src/pages/Quests/76_drunken_doggebi.png'
import hyeondeok from 'kal-calc/src/pages/Quests/79_hyeon_deok.png'
import deviltroopofhatred from 'kal-calc/src/pages/Quests/80_devil_troop_of_hatred.png'
import deviltroopofjealousy from 'kal-calc/src/pages/Quests/80_devil_troop_of_jealousy.png'
import doggebiwithamaskofblackcrow from 'kal-calc/src/pages/Quests/80_doggebi_with_a_mask_of_black_crow.png'
import doggebiwithamaskofblacpanther from 'kal-calc/src/pages/Quests/80_doggebi_with_a_mask_of_black_panther.png'
import jangwoon from 'kal-calc/src/pages/Quests/83_jang_woon.png'
import deviltroopofanger from 'kal-calc/src/pages/Quests/84_devil_troop_of_anger.png'
import giantdoggebi from 'kal-calc/src/pages/Quests/84_giant_doggebi.png'
import chiefguardatmine from 'kal-calc/src/pages/Quests/chief_guard_at_mine.png'



function Quests() {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.card}>
          <p>1- Mendigue 1000 geons e vá para o centro de treinamento(1), fique lá os 30 minutos para pegar level 19</p>
          <p>2- Converse com o npc Chun-Sooin (2) pra iniciar a job</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>3- Vá dropar um stirrup fora de narootuh com o mob "Demon Plunderer" (3)</p>
          <p>4- Entregue o stirrup para o Chun-Sooin (2) para ganhar um CAVALO</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>5- Vá conversar com o Guard (5) e mate 3 "Demon Scout" (5) do lado de fora de narootuh</p>
          <p>6- Vá novamente ate Guard (5) e entregue a quest para ganhar 5 Speed Up Medicines</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>7- Estando level 18, vá conversar com o npc Shin-Woo (7) e abra as quest level 18"</p>
          <p>8- Mate 20 "Demon Soldier" (8), 20 "Demon Infantry" (8) e 20 "Demon Throwing Soldier" (8)</p>
          <p>9- Entregue as quests de volta no npc Shin-Woo (7).</p>
          <p>10- Se não tiver upado para o level 20, mate uns monstros em volta até chegar no level 20.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>11- Estando level 20, vá conversar com o npc Yeon-Woo (11), abra todas as quests level 20</p>
          <p>12- Mate 25 "Demon Shock Trooper" (12), 25 "Demon Flag Bearer" (12), 25 "Ferocious Demon Shock Trooper" (12) e 25 "Ferocious Demon Flag Bearer" (12)</p>
          <p>13- Entregue as quest de volta no npc Yeon-Woo (11).</p>
          <p>14- Se não tiver upado para o level 22, mate uns monstros em volta até chegar no level 22.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>15- Estando level 22, vá conversar com o npc Jim-Phil (15), abra todas as quests level 22</p>
          <p>16- Mate 30 "Demon Band" (16), 30 "Demon Armored Knight" (16), 30 "Demon Mad Knight" (16) e 30 "Demon Commander (16)"</p>
          <p>17- Entregue as quest de volta no npc Jim-Phil (15).</p>
          <p>18- Se não tiver upado para o level 24, mate uns monstros em volta até chegar no level 24.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>19- Estando level 24, vá conversar com o npc Jae-Hyeok (19), abra todas as quests level 24</p>
          <p>20- Mate 40 "Elite Demon Mad Knight" (20), 40 "Elite Demon Commander" (20) e 40 "Demon Commander" (16),</p>
          <p>21- Entregue as quest de volta no npc Jae-Hyeok (19).</p>
          <p>22- Se não tiver upado para o level 25, mate uns monstros em volta até chegar no level 25.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>23- Estando level 25, vá conversar com o npc Yeon-Cheol (23), abra todas as quests level 25</p>
          <p>24- Mate 40 "Big Handed Inhabitant" (24), 40 "Big Handed Slave" (24), 40 "Despair Big Handed Blue Warrior" (24) e 40 "Despair Big Handed Red Warrior" (24)</p>
          <p>25- Entregue as quest de volta no npc Yeon-Cheol (23).</p>
          <p>26- Se não tiver upado para o level 27, mate uns monstros em volta até chegar no level 27.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>27- Estando level 27, vá conversar com o npc Chief Guard (27), abra todas as quests level 27</p>
          <p>28- Mate 50 "Demon Water Dragon" (28), 50 "Hungry Demon Water Dragon" (28), 50 "Demon Water Dragon Predator" (28) e 50 "Demon Water Dragon Commander" (28)</p>
          <p>29- Entregue as quest de volta no npc Chief Guard (27).</p>
          <p>30- Se não tiver upado para o level 29, mate uns monstros em volta até chegar no level 29.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>31- Estando level 29, vá conversar com o npc Hyeok-Phil (31), abra todas as quests level 29</p>
          <p>32- Mate 50 "Demon Water Dragon Chained" (32), 50 "Hungry Demon Water Dragon Chained" (32), 50 "Demon Water Dragon Predator Chained" (32) e 50 "Demon Water Dragon Commander Chained" (32)</p>
          <p>33- Entregue as quest de volta no npc Hyeok-Phil (31).</p>
          <p>34- Se não tiver upado para o level 31, mate uns monstros em volta até chegar no level 31.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>35- Estando level 31, vá conversar com o npc Lee-Hwa (35), abra todas as quests level 31</p>
          <p>36- Mate 50 "Assault Demon Throwing Soldier" (36), 50 "Assault Demon Band" (36) e 50 "Assault Demon Armored Knight (36)</p>
          <p>37- Entregue as quest de volta no npc Lee-Hwa (35).</p>
          <p>38- Se não tiver upado para o level 33, mate uns monstros em volta até chegar no level 33.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>39- Estando ainda level 31, vá conversar com o npc Pae-Woon (39), abra todas as quests level 31</p>
          <p>40- Mate 50 " Assault Demon Band" (40) e 50 "Assault Demon Armored Knight" (40)</p>
          <p>41- Entregue as quest de volta no npc Pae-Woon (39).</p>
          <p>42- Se não tiver upado para o level 33, mate uns monstros em volta até chegar no level 33.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>43- Estando level 33, vá conversar com o npc Ma-Cheol (43), abra todas as quests level 33</p>
          <p>44- Mate 70 "Castoff Baby Ghost" (44) e 70 "Ghost of Young Man" (44)</p>
          <p>45- Entregue as quest de volta no npc Ma-Cheol (39).</p>
          <p>46- Se não tiver upado para o level 34, mate uns monstros em volta até chegar no level 34.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>47- Estando level 34, vá conversar com o npc Hae-Jin (47), abra todas as quests level 34</p>
          <p>48- Mate 70 "Ghost of Young Woman " (48), 70 "Ghost of Blacksmith" (48) e 70 "Ghost of Guard" (48)</p>
          <p>49- Entregue as quest de volta no npc Hae-Jin (47).</p>
          <p>50- Se não tiver upado para o level 35, mate uns monstros em volta até chegar no level 35.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>51- Estando level 35, vá conversar com o npc Yeon-Seok (51), abra todas as quests level 35</p>
          <p>52- Mate 70 "Fellow Traveler to the Other World" (52) e 70 "Sealed Ghost Troop" (52)</p>
          <p>53- Entregue as quest de volta no npc Yeon-Seok (51).</p>
          <p>54- Se não tiver upado para o level 36, mate uns monstros em volta até chegar no level 36.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>55- Estando level 36, vá conversar com o npc Kang-Chan (55), abra todas as quests level 37</p>
          <p>56- Mate 80 "Seaside Hungry Demon Water Dragon" (56), 80 "Seaside Demon Water Dragon Predator" (56) e 80 "Seaside Demon Water Dragon Commander" (56)</p>
          <p>57- Entregue as quest de volta no npc Kang-Chan (55).</p>
          <p>58- Se não tiver upado para o level 37, mate uns monstros em volta até chegar no level 37.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>59- Estando level 37, vá conversar com o npc Won-Goon (59), abra todas as quests level 37</p>
          <p>
            <p>60- Mate 80 "Ghost of Guard the Chained" (60), 80 "Fellow Traveler to the Other World the Chained" (60), 80 "Sealed Ghost Troop the Chained" (60) e 80 "Sealed Ghost Troop the Chained" (60)</p>
          </p>
          <p>61- Entregue as quest de volta no npc Won-Goon (59).</p>
          <p>62- Se não tiver upado para o level 38, mate uns monstros em volta até chegar no level 38.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>63- Estando level 38, vá conversar com o npc Lee-Yul (63), abra todas as quests level 38</p>
          <p>64- Mate 90 "Devil Soldier" (64), 90 "Devil Soldier with Twin Blades" (64), 90 "Devil Soldier with Bow" (64) e 90 "Devil Soldier with Sword" (64)</p>
          <p>65- Entregue as quest de volta no npc Lee-Yul (63).</p>
          <p>66- Se não tiver upado para o level 40, mate uns monstros em volta até chegar no level 40.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>67- Estando level 40, vá conversar com o npc Chan-Soo (67), abra todas as quests level 40</p>
          <p>68- Mate 90 "Devil Soldier with Spear" (68), 90 "1st Devil Monster and 2nd Devil Monster" (68) e 90 "Devil Soldier with Spear" (68)</p>
          <p>69- Entregue as quest de volta no npc Chan-Soo (67).</p>
          <p>70- Se não tiver upado para o level 41, mate uns monstros em volta até chegar no level 41.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>71- Estando level 41, vá conversar com o npc Jae-won (68), abra todas as quests level 41</p>
          <p>72- Mate 100 "Guardian of Doggebi" (69), 100 "Devil Troop of Desire" (69) e 100 "Doggebi of Monster Face" (69)</p>
          <p>73- Entregue as quest de volta no npc Jae-won (68).</p>
          <p>74- Se não tiver upado para o level 44, mate uns monstros em volta até chegar no level 44.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>75- Estando level 44, vá conversar com o npc Myeong-Hwan (72), abra todas as quests level 44</p>
          <p>76- Mate 100 "Devil Troop of Pain" (73), 100 "Doggebi with a Gong" (73), 100 "Devil Troop of Greed" (73) e 100 "Drunken Doggebi" (73)</p>
          <p>77- Entregue as quest de volta no npc Myeong-Hwan (72).</p>
          <p>78- Se não tiver upado para o level 47, mate uns monstros em volta até chegar no level 47.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>79- Estando level 47, vá conversar com o npc Hyeon-Deok (76), abra todas as quests level 47</p>
          <p>80- Mate 100 "Devil Troop of Jealousy" (77), 100 "Doggebi with a Mask of Black Crow" (77), 100 "Devil Troop of Hatred" (77) e 100 "Doggebi with a Mask of Black Panther" (77)</p>
          <p>81- Entregue as quest de volta no npc Hyeon-Deok (76).</p>
          <p>82- Se não tiver upado para o level 50, mate uns monstros em volta até chegar no level 50.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>

        <div className={styles.card}>
          <p>83- Estando level 50, vá conversar com o npc Jang-Woon (80), abra todas as quests level 50</p>
          <p>84- Mate 150 "Giant Doggebi" (81), 150 "Devil Troop of Anger" (81) e 150 "Devil Troop of Anger" (81)</p>
          <p>85- Entregue as quest de volta no npc Jang-Woon (80).</p>
          <p>86- Se não tiver upado para o level 51, mate uns monstros em volta até chegar no level 51.</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={npc2}></img>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Quests;