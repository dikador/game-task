export const gameModule = {
   state: () => ({
      products: [
         {
            id: 0,
            ice: true,
            title: "Тонус и эластичность",
            name: "HYALU B5",
            text: "Увлажняющая сыворотка + уход + уход для контура глаз",
            help: "В новом году хочется быть в тонусе и оставаться наполненными жизненными ресурсами, как после отдыха на январских праздниках. Кожа тоже хочет избавиться от признаков усталости, выглядеть здоровой и свежей. Стать увлажненной и эластичной ей помогут средства из данного набора — с гиалуроновой кислотой и витамином В5 в составе.",
         },
         {
            id: 1,
            ice: true,
            title: "Победа над черными точками",
            name: "EFFACLAR",
            text: "Очищающий гель + лосьон, сужающий поры + эмульсия к",
            help: "Несовершенства не должны мешать наслаждаться своим отражением в зеркале и влиять на уверенность в себе.  Средства в этом наборе препятствуют образованию черных точек и закупоренных пор, выравнивают рельеф кожи и матируют кожу, уменьшая жирный блеск.",
         },
         {
            id: 2,
            ice: true,
            title: "Защита от сухости тела",
            name: "LIPIKAR",
            text: "Бальзам AP+M + LIPIKAR Масло + CICAPLAST Бальзам B5",
            help: "Мы даем себе обещание в новом году уделять больше внимания нашему телу — правильно питаться, заниматься спортом, чаще бывать на свежем воздухе. Коже тела тоже нужно внимание — особенно в зимний период. Средства в составе этого набора увлажняют и успокаивают сухую кожу, способствуют уменьшению зуда и раздражения, интенсивно питают и восстанавливают защитный барьер.",
         },
         {
            id: 3,
            ice: true,
            title: "Свобода от аллергии",
            name: "TOLERIANE SENSITIVE",
            text: "Легкий крем + очищающий гель-уход",
            help: "Чтобы достигать успехов, важно чувствовать свободу действий и уметь сопротивляться внешним факторам, сохраняя при этом внутренний баланс. Средства из этого набора помогут коже противостоять аллергенам и внешним раздражителям. Они могут поддержать баланс микробиома, укрепить защитную функцию кожи и снизить проявления ее чувствительности. В составе* экстракт бактерий из термальной воды La Roche-Posay, нейросенсин, масло карите и сквалан.",
         },
         {
            id: 4,
            ice: true,
            title: "Свобода от аллергии",
            name: "TOLERIANE DERMALLERGO",
            text: "Легкий крем + очищающий гель-уход",
            help: "Чтобы достигать успехов, важно чувствовать свободу действий и уметь сопротивляться внешним факторам, сохраняя при этом внутренний баланс. Средства из этого набора помогут коже противостоять аллергенам и внешним раздражителям. Они могут поддержать баланс микробиома, укрепить защитную функцию кожи и снизить проявления ее чувствительности. В составе* экстракт бактерий из термальной воды La Roche-Posay, нейросенсин, масло карите и сквалан.",
         },
         {
            id: 5,
            ice: true,
            title: "Обновление и сияние",
            name: "VITAMIN C10",
            text: "Крем-филлер для заполнения морщин + для контура глаз",
            help: "Новый год — время сиять! Сиять здоровьем, хорошим настроением и энергией. Это время обновлений, когда мы воодушевленно беремся за новые начинания. Средства с мощным антиоксидантом витамином С вернут сияние вашей коже, помогут сократить морщины и улучшить цвет лица. ",
         },
         {
            id: 6,
            ice: true,
            title: "Ровный тон и текстура кожи",
            name: "RETINOL B3",
            text: "Крем-филлер для заполнения морщин + для контура глаз",
            help: "Каждый год приносит нам полезный опыт, новые знания и впечатления. Со временем меняемся мы, меняется и наша кожа. Средства данного набора с ретинолом и витамином В3 в составе разглаживают глубокие и поверхностные морщины, заметно выравнивают микрорельеф кожи и цвет лица.",
         },
         {
            id: 7,
            ice: true,
            title: "Увлажнение чувствительной кожи",
            name: "PHYSIOLOGIQUE",
            text: "Крем-филлер для заполнения морщин + для контура глаз",
            help: "Иногда в суете предновогодних дел мы устаем и становимся чувствительными к мелочам, больше всего хочется комфорта и отдыха. Средства в этом наборе не только увлажняют кожу и предотвращают потерю влаги, но и позволяют уменьшить признаки повышенной чувствительности: успокаивают, устраняют ощущение стянутости, возвращают чувство комфорта. ",
         },
         {
            id: 8,
            ice: true,
            title: "Увлажнение чувствительной кожи",
            name: "CICAPLAST",
            text: "ОЧИЩАЮЩИЙ ГЕЛЬ + БАЛЬЗАМ + Мультивосстанавливающий спрей",
            help: "После насыщенного на события года важно восстановить силы, замедлиться и расслабиться. Коже тоже зачастую нужно восстановление от ссадин и царапин, покраснений, ожогов, сухости и шелушения. Средства в этом наборе улучшают процесс восстановления кожи, обладают антибактериальными свойствами и успокаивают сухие, раздражённые участки кожи.",
         },
      ],

      promocodes: [
         { id: 0, active: false, rules: 1, code: "NY-ПРОБНИКИ", title: "3 пробника", text: " в подарок при заказе от 1500 руб" },
         {
            id: 1,
            active: false,
            rules: 4,
            code: "NY-МИНИ",
            title: "Hyalu B5",
            text: "Миниатюра сыворотки 10мл в подарок при заказе от 3000 руб",
         },
         {
            id: 2,
            active: false,
            rules: 7,
            code: "NY-КРЕМ",
            title: "Lipikar Xerand",
            text: "Полноразмерный крем для рук 50мл в подарок при заказе от 4500",
         },
         { id: 3, active: false, rules: 9, code: "NY-СПРЕЙ", title: "Cicaplast Spray", text: "СПРЕЙ, 100 мл в подарок от 5 500 руб" },
      ],
      current: {},

      points: 0,
   }),
   mutations: {
      setCurrent(state) {
         let rand = Math.floor(Math.random() * state.products.length);

         while (!state.products[rand].ice && state.points < state.products.length - 1) {
            rand = Math.floor(Math.random() * state.products.length);
         }

         if (state.points < state.products.length - 1) {
            state.current = state.products[rand];
         }
      },
      setPromocodes(state) {
         state.promocodes.forEach((element) => {
            if (state.points >= element.rules) element.active = true;
         });
      },

      setPoints(state, points) {
         if (state.points >= state.products.length) {
            state.points = state.products.length;
         } else {
            state.points = points;
         }
      },
   },
   actions: {},
   namespaced: true,
};
