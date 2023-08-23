import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from './Quests.module.css'
import foto from '../../pages/Home/dungeon-redondo.png'
import world from '../../pages/Home/world-redondo.png'
import quests from '../../pages/Home/quests.png'

import training from '../../pages/Quests/1_training_center.png'
import chunsooin from '../../pages/Quests/2_chun_sooin.png'
import demonplunderer from '../../pages/Quests/3_demon_plunderer.png'
import demonscout from '../../pages/Quests/5_demon_scout.png'
import guardnarooth from '../../pages/Quests/5_guard_narooth.png'
import shinwoo from '../../pages/Quests/7_shin_woo.png'
import demoninfantry from '../../pages/Quests/8_demon_infantry.png'
import demonsoldier from '../../pages/Quests/8_demon_soldier.png'
import demonthrowingsoldier from '../../pages/Quests/8_demon_throwing_soldier.png'
import yeonwoo from '../../pages/Quests/11_yeon_woo.png'
import demonflagbearer from '../../pages/Quests/12_demon_flag_bearer.png'
import demonshocktrooper from '../../pages/Quests/12_demon_shock_trooper.png'
import ferociousdemonflagbearer from '../../pages/Quests/12_ferocious_demon_flag_bearer.png'
import ferociousdemonshocktrooper from '../../pages/Quests/12_ferocious_demon_shock_trooper.png'
import jinphill from '../../pages/Quests/15_jin_phill.png'
import demonarmoredknight from '../../pages/Quests/16_demon_armored_knight.png'
import demonband from '../../pages/Quests/16_demon_band.png'
import demoncommander from '../../pages/Quests/16_demon_commander.png'
import demonmadknight from '../../pages/Quests/16_demon_mad_knight.png'
import jaehyeok from '../../pages/Quests/19_jae_hyeok.png'
import elitedemoncommander from '../../pages/Quests/20_elite_demon_commander.png'
import elitedemonmadknight from '../../pages/Quests/20_elite_demon_mad_knight.png'
import yeoncheol from '../../pages/Quests/23_yeon_cheol.png'
import bighandedinhabitant from '../../pages/Quests/24_big_handed_inhabitant.png'
import bighandedslave from '../../pages/Quests/24_big_handed_slave.png'
import despairbighandedbluewarrior from '../../pages/Quests/24_despair_big_handed_blue_warrior.png'
import despairbighandedredwarrior from '../../pages/Quests/24_despair_big_handed_red_warrior.png'
import demonwaterdragoncommanderthechained from '../../pages/Quests/32_demon_water_dragon_commander_the_chained.png'
import demonwaterdragonpredatorthechained from '../../pages/Quests/32_demon_water_dragon_predator_the_chained.png'
import demonwaterdragonthechained from '../../pages/Quests/32_demon_water_dragon_the_chained.png'
import hungrydemonwaterdragonchained from '../../pages/Quests/32_hungry_demon_water_dragon_chained.png'
import leehwa from '../../pages/Quests/35_lee_hwa.png'
import assaultdemoninfantry from '../../pages/Quests/36_assault_demon_infantry.png'
import assaultdemonthrowingsoldier from '../../pages/Quests/36_assault_demon_throwing_soldier.png'
import assaultdemonarmoredknight from '../../pages/Quests/40_assault_demon_armored_knight.png'
import assaultdemonband from '../../pages/Quests/40_assault_demon_band.png'
import macheol from '../../pages/Quests/43_ma_cheol.png'
import castoffbabyghost from '../../pages/Quests/44_castoff_baby_ghost.png'
import ghostofyoungman from '../../pages/Quests/44_ghost_of_young_man.png'
import haejin from '../../pages/Quests/47_hae_jin.png'
import ghostofblacksmith from '../../pages/Quests/48_ghost_of_black_smith.png'
import ghostofguard from '../../pages/Quests/48_ghost_of_guard.png'
import ghostofyoungwoman from '../../pages/Quests/48_ghost_of_young_woman.png'
import yeonseok from '../../pages/Quests/51_yeon_seok.png'
import fellowtravelertotheotherworld from '../../pages/Quests/52_fellow_traveler_to_the_other_world.png'
import sealedghosttroop from '../../pages/Quests/52_sealed_ghost_troop.png'
import kangchan from '../../pages/Quests/55_kang_chan.png'
import seasidedemonwatercommander from '../../pages/Quests/56_seaside_demon_water_commander.png'
import seasidedemonwaterdragonpredator from '../../pages/Quests/56_seaside_demon_water_dragon_predator.png'
import seasidehungrydemonwaterdragon from '../../pages/Quests/56_seaside_hungry_demon_water_dragon.png'
import wongoon from '../../pages/Quests/59_won_goon.png'
import fellowtravelertotheotherworldthechained from '../../pages/Quests/60_fellow_traveler_to_the_other_world_the_chained.png'
import ghostofguardthechained from '../../pages/Quests/60_ghost_of_guard_the_chained.png'
import sealedghostoftroopthechained from '../../pages/Quests/60_sealed_ghost_of_troop_the_chained.png'
import devilsoldierwithbow from '../../pages/Quests/64_devil_soldier_with_bow.png'
import devilsoldierwithsword from '../../pages/Quests/64_devil_soldier_with_sword.png'
import devilsoldierwithtwinblades from '../../pages/Quests/64_devil_soldier_with_twin_blades.png'
import devilsoldier from '../../pages/Quests/64_devil_soldier.png'
import stand2nddevilmonster from '../../pages/Quests/68_1st_and_2nd_devil_monster.png'
import devilsoldierwithspear from '../../pages/Quests/68_devil_soldier_with_spear.png'
import jaewon from '../../pages/Quests/71_jae_won.png'
import deviltroopofdesire from '../../pages/Quests/72_devil_troop_of_desire.png'
import doggebiofmonsterface from '../../pages/Quests/72_doggebi_of_monster_face.png'
import guardiandoggebi from '../../pages/Quests/72_guardian_doggebi.png'
import myeonghwan from '../../pages/Quests/75_myeong_hwan.png'
import deviltroopofgreed from '../../pages/Quests/76_devil_troop_of_greed.png'
import deviltroopofpain from '../../pages/Quests/76_devil_troop_of_pain.png'
import doggebiwithagong from '../../pages/Quests/76_doggebi_with_a_gong.png'
import drunkendoggebi from '../../pages/Quests/76_drunken_doggebi.png'
import hyeondeok from '../../pages/Quests/79_hyeon_deok.png'
import deviltroopofhatred from '../../pages/Quests/80_devil_troop_of_hatred.png'
import deviltroopofjealousy from '../../pages/Quests/80_devil_troop_of_jealousy.png'
import doggebiwithamaskofblackcrow from '../../pages/Quests/80_doggebi_with_a_mask_of_black_crow.png'
import doggebiwithamaskofblacpanther from '../../pages/Quests/80_doggebi_with_a_mask_of_black_panther.png'
import jangwoon from '../../pages/Quests/83_jang_woon.png'
import deviltroopofanger from '../../pages/Quests/84_devil_troop_of_anger.png'
import giantdoggebi from '../../pages/Quests/84_giant_doggebi.png'
import chiefguardatmine from '../../pages/Quests/chief_guard_at_mine.png'



function Quests(){
  return (
    <>
      <Container>        
        <Link to={`/`} className={styles.link}>Home</Link>
        <div className={styles.primeira}><strong>GUIA PARA UPAR DO 1 AO 51</strong></div>
        <div className={styles.lembrete}>Lembrando que ao pegar uma skill em área, talvez upar matando monstros possa ser mais rápido.</div>
        <div className={styles.primeira}><strong>Primeira skill em área:</strong></div>
        <div className={styles.lembrete}><strong>Knight:</strong> Vortex no level 45 (delay: 6s)</div>
        <div className={styles.lembrete}><strong>Archer:</strong> Blow-up Arrow no level 35 (delay: 5s)</div>
        <div className={styles.lembrete}><strong>Mage:</strong> Fire Blow no level 33 (delay: 8s)</div>
        <div className={styles.lembrete}><strong>Thief Hitman:</strong> Strong Sword no level 56 (delay: 7s)</div>
        <div className={styles.lembrete}><strong>Thief I.S:</strong> Spin Attack no level 50 (delay: 9s)</div>
        <div className={styles.lembrete}><strong>Shaman:</strong> Hurricane no level 35 (delay: 6s)</div>
        <div className={styles.lembrete}><strong>Swordtrickster:</strong> Multiple Slash no level 60 (delay: 7s)</div>

        
        <div className={styles.card}>
          <p>1- Mendigue 1000 geons e vá para o centro de treinamento fique lá os 30 minutos para pegar level 19</p>
          <p>2- Converse com o npc Chun-Sooin pra iniciar a job</p>
          <img className={styles.image} src={training}></img>
          <img className={styles.image} src={chunsooin}></img>
        </div>

        <div className={styles.card}>
          <p>3- Vá dropar um stirrup fora de narootuh com o mob "Demon Plunderer" </p>
          <p>4- Entregue o stirrup para o Chun-Sooin para ganhar um CAVALO</p>
          <img className={styles.image} src={demonplunderer}></img>
          <img className={styles.image} src={chunsooin}></img>
        </div>

        <div className={styles.card}>
          <p>5- Vá conversar com o Guard e mate 3 "Demon Scout" do lado de fora de narootuh</p>
          <p>6- Vá novamente ate Guard e entregue a quest para ganhar 5 Speed Up Medicines</p>
          <img className={styles.image} src={guardnarooth}></img>
          <img className={styles.image} src={demonscout}></img>
        </div>

        <div className={styles.card}>
          <p>7- Estando level 18, vá conversar com o npc Shin-Woo e abra as quest level 18"</p>
          <p>8- Mate 20 "Demon Soldier"  20 "Demon Infantry" e 20 "Demon Throwing Soldier" </p>
          <p>9- Entregue as quests de volta no npc Shin-Woo </p>
          <p>10- Se não tiver upado para o level 20, mate uns monstros em volta até chegar no level 20.</p>
          <img className={styles.image} src={shinwoo}></img>
          <img className={styles.image} src={demonsoldier}></img>
          <img className={styles.image} src={demoninfantry}></img>
          <img className={styles.image} src={demonthrowingsoldier}></img>
        </div>

        <div className={styles.card}>
          <p>11- Estando level 20, vá conversar com o npc Yeon-Woo , abra todas as quests level 20</p>
          <p>12- Mate 25 "Demon Shock Trooper" , 25 "Demon Flag Bearer" , 25 "Ferocious Demon Shock Trooper"  e 25 "Ferocious Demon Flag Bearer" </p>
          <p>13- Entregue as quest de volta no npc Yeon-Woo .</p>
          <p>14- Se não tiver upado para o level 22, mate uns monstros em volta até chegar no level 22.</p>
          <img className={styles.image} src={yeonwoo}></img>
          <img className={styles.image} src={demonshocktrooper}></img>
          <img className={styles.image} src={demonflagbearer}></img>
          <img className={styles.image} src={ferociousdemonshocktrooper}></img>
          <img className={styles.image} src={ferociousdemonflagbearer}></img>
        </div>

        <div className={styles.card}>
          <p>15- Estando level 22, vá conversar com o npc Jim-Phil , abra todas as quests level 22</p>
          <p>16- Mate 30 "Demon Band" , 30 "Demon Armored Knight" , 30 "Demon Mad Knight" e 30 "Demon Commander "</p>
          <p>17- Entregue as quest de volta no npc Jim-Phil .</p>
          <p>18- Se não tiver upado para o level 24, mate uns monstros em volta até chegar no level 24.</p>
          <img className={styles.image} src={jinphill}></img>
          <img className={styles.image} src={demonband}></img>
          <img className={styles.image} src={demonarmoredknight}></img>
          <img className={styles.image} src={demonmadknight}></img>
          <img className={styles.image} src={demoncommander}></img>
        </div>

        <div className={styles.card}>
          <p>19- Estando level 24, vá conversar com o npc Jae-Hyeok , abra todas as quests level 24</p>
          <p>20- Mate 40 "Elite Demon Mad Knight" , 40 "Elite Demon Commander" e 40 "Demon Commander" ,</p>
          <p>21- Entregue as quest de volta no npc Jae-Hyeok .</p>
          <p>22- Se não tiver upado para o level 25, mate uns monstros em volta até chegar no level 25.</p>
          <img className={styles.image} src={jaehyeok}></img>
          <img className={styles.image} src={elitedemonmadknight}></img>
          <img className={styles.image} src={elitedemoncommander}></img>
          <img className={styles.image} src={demoncommander}></img>
        </div>

        <div className={styles.card}>
          <p>23- Estando level 25, vá conversar com o npc Yeon-Cheol , abra todas as quests level 25</p>
          <p>24- Mate 40 "Big Handed Inhabitant" , 40 "Big Handed Slave" , 40 "Despair Big Handed Blue Warrior"  e 40 "Despair Big Handed Red Warrior" </p>
          <p>25- Entregue as quest de volta no npc Yeon-Cheol .</p>
          <p>26- Se não tiver upado para o level 27, mate uns monstros em volta até chegar no level 27.</p>
          <img className={styles.image} src={yeoncheol}></img>
          <img className={styles.image} src={bighandedinhabitant}></img>
          <img className={styles.image} src={bighandedslave}></img>
          <img className={styles.image} src={despairbighandedbluewarrior}></img>
          <img className={styles.image} src={despairbighandedredwarrior}></img>
        </div>

        <div className={styles.card}>
          <p>27- Estando level 27, vá conversar com o npc Chief Guard , abra todas as quests level 27</p>
          <p>28- Mate 50 "Demon Water Dragon", 50 "Hungry Demon Water Dragon", 50 "Demon Water Dragon Predator" e 50 "Demon Water Dragon Commander" </p>
          <p>29- Entregue as quest de volta no npc Chief Guard .</p>
          <p>30- Se não tiver upado para o level 29, mate uns monstros em volta até chegar no level 29.</p>
          <img className={styles.image} src={chiefguardatmine}></img>
        </div>

        <div className={styles.card}>
          <p>31- Estando level 29, vá conversar com o npc Hyeok-Phil , abra todas as quests level 29</p>
          <p>32- Mate 50 "Demon Water Dragon Chained", 50 "Hungry Demon Water Dragon Chained", 50 "Demon Water Dragon Predator Chained" e 50 "Demon Water Dragon Commander Chained" </p>
          <p>33- Entregue as quest de volta no npc Hyeok-Phil .</p>
          <p>34- Se não tiver upado para o level 31, mate uns monstros em volta até chegar no level 31.</p>
          <img className={styles.image} src={demonwaterdragonthechained}></img>
          <img className={styles.image} src={hungrydemonwaterdragonchained}></img>
          <img className={styles.image} src={demonwaterdragonpredatorthechained}></img>
          <img className={styles.image} src={demonwaterdragoncommanderthechained}></img>
        </div>

        <div className={styles.card}>
          <p>35- Estando level 31, vá conversar com o npc Lee-Hwa, abra todas as quests level 31</p>
          <p>36- Mate 50 "Assault Demon Infantry" e 50 "Assault Demon Throwing Soldier" </p>
          <p>37- Entregue as quest de volta no npc Lee-Hwa .</p>
          <p>38- Se não tiver upado para o level 33, mate uns monstros em volta até chegar no level 33.</p>
          <img className={styles.image} src={leehwa}></img>
          <img className={styles.image} src={assaultdemoninfantry}></img>
          <img className={styles.image} src={assaultdemonthrowingsoldier}></img>
        </div>

        <div className={styles.card}>
          <p>39- Estando ainda level 31 ou 32, vá conversar com o npc Pae-Woon , abra todas as quests level 31</p>
          <p>40- Mate 50 " Assault Demon Band" e 50 "Assault Demon Armored Knight" </p>
          <p>41- Entregue as quest de volta no npc Pae-Woon .</p>
          <p>42- Se não tiver upado para o level 33, mate uns monstros em volta até chegar no level 33.</p>
          <img className={styles.image} src={assaultdemonband}></img>
          <img className={styles.image} src={assaultdemonarmoredknight}></img>
        </div>

        <div className={styles.card}>
          <p>43- Estando level 33, vá conversar com o npc Ma-Cheol, abra todas as quests level 33</p>
          <p>44- Mate 70 "Castoff Baby Ghost" e 70 "Ghost of Young Man" </p>
          <p>45- Entregue as quest de volta no npc Ma-Cheol .</p>
          <p>46- Se não tiver upado para o level 34, mate uns monstros em volta até chegar no level 34.</p>
          <img className={styles.image} src={macheol}></img>
          <img className={styles.image} src={castoffbabyghost}></img>
          <img className={styles.image} src={ghostofyoungman}></img>
        </div>

        <div className={styles.card}>
          <p>47- Estando level 34, vá conversar com o npc Hae-Jin, abra todas as quests level 34</p>
          <p>48- Mate 70 "Ghost of Young Woman ", 70 "Ghost of Blacksmith" e 70 "Ghost of Guard" </p>
          <p>49- Entregue as quest de volta no npc Hae-Jin .</p>
          <p>50- Se não tiver upado para o level 35, mate uns monstros em volta até chegar no level 35.</p>
          <img className={styles.image} src={haejin}></img>
          <img className={styles.image} src={ghostofyoungwoman}></img>
          <img className={styles.image} src={ghostofblacksmith}></img>
          <img className={styles.image} src={ghostofguard}></img>
        </div>

        <div className={styles.card}>
          <p>51- Estando level 35, vá conversar com o npc Yeon-Seok, abra todas as quests level 35</p>
          <p>52- Mate 70 "Fellow Traveler to the Other World" e 70 "Sealed Ghost Troop" </p>
          <p>53- Entregue as quest de volta no npc Yeon-Seok .</p>
          <p>54- Se não tiver upado para o level 36, mate uns monstros em volta até chegar no level 36.</p>
          <img className={styles.image} src={yeonseok}></img>
          <img className={styles.image} src={fellowtravelertotheotherworld}></img>
          <img className={styles.image} src={sealedghosttroop}></img>
        </div>

        <div className={styles.card}>
          <p>55- Estando level 36, vá conversar com o npc Kang-Chan, abra todas as quests level 37</p>
          <p>56- Mate 80 "Seaside Hungry Demon Water Dragon", 80 "Seaside Demon Water Dragon Predator" e 80 "Seaside Demon Water Dragon Commander" </p>
          <p>57- Entregue as quest de volta no npc Kang-Chan .</p>
          <p>58- Se não tiver upado para o level 37, mate uns monstros em volta até chegar no level 37.</p>
          <img className={styles.image} src={kangchan}></img>
          <img className={styles.image} src={seasidehungrydemonwaterdragon}></img>
          <img className={styles.image} src={seasidedemonwaterdragonpredator}></img>
          <img className={styles.image} src={seasidedemonwatercommander}></img>
        </div>

        <div className={styles.card}>
          <p>59- Estando level 37, vá conversar com o npc Won-Goon, abra todas as quests level 37</p>
          <p>
            <p>60- Mate 80 "Ghost of Guard the Chained", 80 "Fellow Traveler to the Other World the Chained", 80 "Sealed Ghost Troop the Chained" e 80 "Sealed Ghost Troop the Chained" </p>
          </p>
          <p>61- Entregue as quest de volta no npc Won-Goon .</p>
          <p>62- Se não tiver upado para o level 38, mate uns monstros em volta até chegar no level 38.</p>
          <img className={styles.image} src={wongoon}></img>
          <img className={styles.image} src={ghostofguardthechained}></img>
          <img className={styles.image} src={fellowtravelertotheotherworldthechained}></img>
          <img className={styles.image} src={sealedghostoftroopthechained}></img>
        </div>

        <div className={styles.card}>
          <p>63- Estando level 38, vá conversar com o npc Lee-Yul, abra todas as quests level 38</p>
          <p>64- Mate 90 "Devil Soldier", 90 "Devil Soldier with Twin Blades", 90 "Devil Soldier with Bow" e 90 "Devil Soldier with Sword" </p>
          <p>65- Entregue as quest de volta no npc Lee-Yul .</p>
          <p>66- Se não tiver upado para o level 40, mate uns monstros em volta até chegar no level 40.</p>
          <img className={styles.image} src={devilsoldier}></img>
          <img className={styles.image} src={devilsoldierwithtwinblades}></img>
          <img className={styles.image} src={devilsoldierwithbow}></img>
          <img className={styles.image} src={devilsoldierwithsword}></img>
        </div>

        <div className={styles.card}>
          <p>67- Estando level 40, vá conversar com o npc Chan-Soo, abra todas as quests level 40</p>
          <p>68- Mate 90 "Devil Soldier with Spear", 90 "1st Devil Monster and 2nd Devil Monster" e 90 "Devil Soldier with Spear" </p>
          <p>69- Entregue as quest de volta no npc Chan-Soo .</p>
          <p>70- Se não tiver upado para o level 41, mate uns monstros em volta até chegar no level 41.</p>
          <img className={styles.image} src={devilsoldierwithspear}></img>
          <img className={styles.image} src={stand2nddevilmonster}></img>
          <img className={styles.image} src={devilsoldierwithspear}></img>
        </div>

        <div className={styles.card}>
          <p>71- Estando level 41, vá conversar com o npc Jae-won, abra todas as quests level 41</p>
          <p>72- Mate 100 "Guardian of Doggebi" , 100 "Devil Troop of Desire" e 100 "Doggebi of Monster Face" </p>
          <p>73- Entregue as quest de volta no npc Jae-won .</p>
          <p>74- Se não tiver upado para o level 44, mate uns monstros em volta até chegar no level 44.</p>
          <img className={styles.image} src={jaewon}></img>
          <img className={styles.image} src={guardiandoggebi}></img>
          <img className={styles.image} src={deviltroopofdesire}></img>
          <img className={styles.image} src={doggebiofmonsterface}></img>
        </div>

        <div className={styles.card}>
          <p>75- Estando level 44, vá conversar com o npc Myeong-Hwan, abra todas as quests level 44</p>
          <p>76- Mate 100 "Devil Troop of Pain", 100 "Doggebi with a Gong", 100 "Devil Troop of Greed" e 100 "Drunken Doggebi" </p>
          <p>77- Entregue as quest de volta no npc Myeong-Hwan .</p>
          <p>78- Se não tiver upado para o level 47, mate uns monstros em volta até chegar no level 47.</p>
          <img className={styles.image} src={myeonghwan}></img>
          <img className={styles.image} src={deviltroopofpain}></img>
          <img className={styles.image} src={doggebiwithagong}></img>
          <img className={styles.image} src={deviltroopofgreed}></img>
          <img className={styles.image} src={drunkendoggebi}></img>
        </div>

        <div className={styles.card}>
          <p>79- Estando level 47, vá conversar com o npc Hyeon-Deok, abra todas as quests level 47</p>
          <p>80- Mate 100 "Devil Troop of Jealousy" , 100 "Doggebi with a Mask of Black Crow", 100 "Devil Troop of Hatred" e 100 "Doggebi with a Mask of Black Panther" </p>
          <p>81- Entregue as quest de volta no npc Hyeon-Deok .</p>
          <p>82- Se não tiver upado para o level 50, mate uns monstros em volta até chegar no level 50.</p>
          <img className={styles.image} src={hyeondeok}></img>
          <img className={styles.image} src={deviltroopofjealousy}></img>
          <img className={styles.image} src={doggebiwithamaskofblackcrow}></img>
          <img className={styles.image} src={deviltroopofhatred}></img>
          <img className={styles.image} src={doggebiwithamaskofblacpanther}></img>
        </div>

        <div className={styles.card}>
          <p>83- Estando level 50, vá conversar com o npc Jang-Woon, abra todas as quests level 50</p>
          <p>84- Mate 150 "Giant Doggebi" , 150 "Devil Troop of Anger" e 150 "Devil Troop of Anger" </p>
          <p>85- Entregue as quest de volta no npc Jang-Woon .</p>
          <p>86- Se não tiver upado para o level 51, mate uns monstros em volta até chegar no level 51.</p>
          <img className={styles.image} src={jangwoon}></img>
          <img className={styles.image} src={giantdoggebi}></img>
          <img className={styles.image} src={deviltroopofanger}></img>
          <img className={styles.image} src={deviltroopofanger}></img>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Quests;