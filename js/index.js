{
  const btn4 = document.createElement("button");
  btn4.innerText = "Klicke hier, um zur nächsten Seite des Tests zu gelangen";
  document.body.appendChild(btn4);

  btn4.addEventListener("click", () => {
    var vorname = document.getElementById("vorname");
    var nachname = document.getElementById("nachname");
    var alter = document.getElementById("alter");
    var geschlecht = document.getElementById("geschlecht_select");
    var aktuelleTätigkeit = document.getElementById("tätigkeit_select");
    var ausbildungsstand = document.getElementById("ausbildungsstand_select");

    if (geschlecht.value == 0) {
      if (aktuelleTätigkeit.value == 0) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/Arbeitsloser/arbeitsloser_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 1) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/Schüler/schüler_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 2) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/Azubi/azubi_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 3) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/Student/student_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/Student/student_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/Student/student_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/Student/student_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/Student/student_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/Student/student_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/Student/student_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/Student/student_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 4) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/Arbeitnehmer/arbeitnehmer_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 5) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/Selbstständig/selbstständiger_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 6) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/FSJ/fsjler_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 7) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/maennlich/Selbstfindungsphase/selbstfindender_masterstudium.html");
        }
      }
    }


    if (geschlecht.value == 1) {
      if (aktuelleTätigkeit.value == 0) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/Arbeitslose/arbeitslose_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 1) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/Schülerin/schülerin_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 2) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/Azubin/azubin_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 3) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/Studentin/studentin_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 4) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/Arbeitnehmerin/arbeitnehmerin_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 5) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/Selbstständige/selbstständige_masterstudium.html");
        }
      }

      if (aktuelleTätigkeit.value == 6) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/FSJ/fsjlerin_masterstudium.html");
        }
      }
      if (aktuelleTätigkeit.value == 7) {
        if (ausbildungsstand.value == 0) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_keinabschluss.html");
        }
        if (ausbildungsstand.value == 1) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_hauptschulabschluss.html");
        }
        if (ausbildungsstand.value == 2) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_realschulabschluss.html");
        }
        if (ausbildungsstand.value == 3) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_fachabitur.html");
        }
        if (ausbildungsstand.value == 4) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_abitur.html");
        }
        if (ausbildungsstand.value == 5) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_abgeschlosseneausbildung.html");
        }
        if (ausbildungsstand.value == 6) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_bachelorstudium.html");
        }
        if (ausbildungsstand.value == 7) {
          window.location.assign("js/htmls/weiblich/Selbstfindungsphase/selbstfindende_masterstudium.html");
        }
      }
    }

    //localStorage.setItem("alter-übergabe", alter);

  });
}