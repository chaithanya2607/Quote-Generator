let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let  person=document.querySelector('.person');

const quotes=[
    {
      quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
       person: "Thomas Edison"
    },
    {
      quote: "You can observe a lot just by watching.",
     person: "Yogi Berra"
    },
    {
      quote: "A house divided against itself cannot stand.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Difficulties increase the nearer we get to the goal.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Fate is in your hands and no one elses",
     person: "Byron Pulsifer"
    },
    {
      quote: "Be the chief but never the lord.",
     person: "Lao Tzu"
    },
    {
      quote: "Nothing happens unless first we dream.",
     person: "Carl Sandburg"
    },
    {
      quote: "Well begun is half done.",
     person: "Aristotle"
    },
    {
      quote: "Life is a learning experience, only if you learn.",
     person: "Yogi Berra"
    },
    {
      quote: "Self-complacency is fatal to progress.",
     person: "Margaret Sangster"
    },
    {
      quote: "Peace comes from within. Do not seek it without.",
     person: "Buddha"
    },
    {
      quote: "What you give is what you get.",
     person: "Byron Pulsifer"
    },
    {
      quote: "We can only learn to love by loving.",
     person: "Iris Murdoch"
    },
    {
      quote: "Life is change. Growth is optional. Choose wisely.",
     person: "Karen Clark"
    },
    {
      quote: "You'll see it when you believe it.",
     person: "Wayne Dyer"
    },
    {
      quote: "Today is the tomorrow we worried about yesterday.",
     person: null
    },
    {
      quote: "It's easier to see the mistakes on someone else's paper.",
     person: null
    },
    {
      quote: "Every man dies. Not every man really lives.",
     person: null
    },
    {
      quote: "To lead people walk behind them.",
     person: "Lao Tzu"
    },
    {
      quote: "Having nothing, nothing can he lose.",
     person: "William Shakespeare"
    },
    {
      quote: "Trouble is only opportunity in work clothes.",
     person: "Henry J. Kaiser"
    },
    {
      quote: "A rolling stone gathers no moss.",
     person: "Publilius Syrus"
    },
    {
      quote: "Ideas are the beginning points of all fortunes.",
     person: "Napoleon Hill"
    },
    {
      quote: "Everything in life is luck.",
     person: "Donald Trump"
    },
    {
      quote: "Doing nothing is better than being busy doing nothing.",
     person: "Lao Tzu"
    },
    {
      quote: "Trust yourself. You know more than you think you do.",
     person: "Benjamin Spock"
    },
    {
      quote: "Study the past, if you would divine the future.",
     person: "Confucius"
    },
    {
      quote: "The day is already blessed, find peace within it.",
     person: null
    },
    {
      quote: "From error to error one discovers the entire truth.",
     person: "Sigmund Freud"
    },
    {
      quote: "Well done is better than well said.",
     person: "Benjamin Franklin"
    },
    {
      quote: "Bite off more than you can chew, then chew it.",
     person: "Ella Williams"
    },
    {
      quote: "Work out your own salvation. Do not depend on others.",
     person: "Buddha"
    },
    {
      quote: "One today is worth two tomorrows.",
     person: "Benjamin Franklin"
    },
    {
      quote: "Once you choose hope, anythings possible.",
     person: "Christopher Reeve"
    },
    {
      quote: "God always takes the simplest way.",
     person: "Albert Einstein"
    },
    {
      quote: "One fails forward toward success.",
     person: "Charles Kettering"
    },
    {
      quote: "From small beginnings come great things.",
     person: null
    },
    {
      quote: "Learning is a treasure that will follow its owner everywhere",
     person: "Chinese proverb"
    },
    {
      quote: "Be as you wish to seem.",
     person: "Socrates"
    },
    {
      quote: "The world is always in movement.",
     person: "V. Naipaul"
    },
    {
      quote: "Never mistake activity for achievement.",
     person: "John Wooden"
    },
    {
      quote: "What worries you masters you.",
     person: "Haddon Robinson"
    },
    {
      quote: "One faces the future with ones past.",
     person: "Pearl Buck"
    },
    {
      quote: "Goals are the fuel in the furnace of achievement.",
     person: "Brian Tracy"
    },
    {
      quote: "Who sows virtue reaps honour.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "Be kind whenever possible. It is always possible.",
     person: "Dalai Lama"
    },
    {
      quote: "Talk doesn't cook rice.",
     person: "Chinese proverb"
    },
    {
      quote: "He is able who thinks he is able.",
     person: "Buddha"
    },
    {
      quote: "A goal without a plan is just a wish.",
     person: "Larry Elder"
    },
    {
      quote: "To succeed, we must first believe that we can.",
     person: "Michael Korda"
    },
    {
      quote: "Learn from yesterday, live for today, hope for tomorrow.",
     person: "Albert Einstein"
    },
    {
      quote: "A weed is no more than a flower in disguise.",
     person: "James Lowell"
    },
    {
      quote: "Do, or do not. There is no try.",
     person: "Yoda"
    },
    {
      quote: "All serious daring starts from within.",
     person: "Harriet Beecher Stowe"
    },
    {
      quote: "The best teacher is experience learned from failures.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Think how hard physics would be if particles could think.",
     person: "Murray Gell-Mann"
    },
    {
      quote: "Love is the flower you've got to let grow.",
     person: "John Lennon"
    },
    {
      quote: "Don't wait. The time will never be just right.",
     person: "Napoleon Hill"
    },
    {
      quote: "Time is the wisest counsellor of all.",
     person: "Pericles"
    },
    {
      quote: "You give before you get.",
     person: "Napoleon Hill"
    },
    {
      quote: "Wisdom begins in wonder.",
     person: "Socrates"
    },
    {
      quote: "Without courage, wisdom bears no fruit.",
     person: "Baltasar Gracian"
    },
    {
      quote: "Change in all things is sweet.",
     person: "Aristotle"
    },
    {
      quote: "What you fear is that which requires action to overcome.",
     person: "Byron Pulsifer"
    },
    {
      quote: "When performance exceeds ambition, the overlap is called success.",
     person: "Cullen Hightower"
    },
    {
      quote: "When deeds speak, words are nothing.",
     person: "African proverb"
    },
    {
      quote: "Real magic in relationships means an absence of judgement of others.",
     person: "Wayne Dyer"
    },
    {
      quote: "I never think of the future. It comes soon enough.",
     person: "Albert Einstein"
    },
    {
      quote: "Skill to do comes of doing.",
     person: "Ralph Emerson"
    },
    {
      quote: "Wisdom is the supreme part of happiness.",
     person: "Sophocles"
    },
    {
      quote: "I believe that every  person is born with talent.",
     person: "Maya Angelou"
    },
    {
      quote: "Important principles may, and must, be inflexible.",
     person: "Abraham Lincoln"
    },
    {
      quote: "The undertaking of a new action brings new strength.",
     person: "Richard Evans"
    },
    {
      quote: "The years teach much which the days never know.",
     person: "Ralph Emerson"
    },
    {
      quote: "Our distrust is very expensive.",
     person: "Ralph Emerson"
    },
    {
      quote: "All know the way; few actually walk it.",
     person: "Bodhidharma"
    },
    {
      quote: "Great talent finds happiness in execution.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Faith in oneself is the best and safest course.",
     person: "Michelangelo"
    },
    {
      quote: "Courage is going from failure to failure without losing enthusiasm.",
     person: "Winston Churchill"
    },
    {
      quote: "The two most powerful warriors are patience and time.",
     person: "Leo Tolstoy"
    },
    {
      quote: "Anticipate the difficult by managing the easy.",
     person: "Lao Tzu"
    },
    {
      quote: "Those who are free of resentful thoughts surely find peace.",
     person: "Buddha"
    },
    {
      quote: "A short saying often contains much wisdom.",
     person: "Sophocles"
    },
    {
      quote: "It takes both sunshine and rain to make a rainbow.",
     person: null
    },
    {
      quote: "A beautiful thing is never perfect.",
     person: null
    },
    {
      quote: "Only do what your heart tells you.",
     person: "Princess Diana"
    },
    {
      quote: "Life is movement-we breathe, we eat, we walk, we move!",
     person: "John Pierrakos"
    },
    {
      quote: "No one can make you feel inferior without your consent.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "Argue for your limitations, and sure enough theyre yours.",
     person: "Richard Bach"
    },
    {
      quote: "Luck is what happens when preparation meets opportunity.",
     person: "Seneca"
    },
    {
      quote: "Victory belongs to the most persevering.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "Love all, trust a few, do wrong to none.",
     person: "William Shakespeare"
    },
    {
      quote: "In order to win, you must expect to win.",
     person: "Richard Bach"
    },
    {
      quote: "A goal is a dream with a deadline.",
     person: "Napoleon Hill"
    },
    {
      quote: "You can do it if you believe you can!",
     person: "Napoleon Hill"
    },
    {
      quote: "Set your goals high, and don't stop till you get there.",
     person: "Bo Jackson"
    },
    {
      quote: "Every new day is another chance to change your life.",
     person: null
    },
    {
      quote: "Smile, breathe, and go slowly.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "Nobody will believe in you unless you believe in yourself.",
     person: "Liberace"
    },
    {
      quote: "Do more than dream: work.",
     person: "William Arthur Ward"
    },
    {
      quote: "No man was ever wise by chance.",
     person: "Seneca"
    },
    {
      quote: "Some pursue happiness, others create it.",
     person: null
    },
    {
      quote: "He that is giddy thinks the world turns round.",
     person: "William Shakespeare"
    },
    {
      quote: "Don't ruin the present with the ruined past.",
     person: "Ellen Gilchrist"
    },
    {
      quote: "Do something wonderful, people may imitate it.",
     person: "Albert Schweitzer"
    },
    {
      quote: "We do what we do because we believe.",
     person: null
    },
    {
      quote: "Do one thing every day that scares you.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "If you cannot be silent be brilliant and thoughtful.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Who looks outside, dreams; who looks inside, awakes.",
     person: "Carl Jung"
    },
    {
      quote: "What we think, we become.",
     person: "Buddha"
    },
    {
      quote: "The shortest answer is doing.",
     person: "Lord Herbert"
    },
    {
      quote: "All our knowledge has its origins in our perceptions.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "The harder you fall, the higher you bounce.",
     person: null
    },
    {
      quote: "Trusting our intuition often saves us from disaster.",
     person: "Anne Wilson Schaef"
    },
    {
      quote: "Truth is powerful and it prevails.",
     person: "Sojourner Truth"
    },
    {
      quote: "Light tomorrow with today!",
     person: "Elizabeth Browning"
    },
    {
      quote: "Silence is a fence around wisdom.",
     person: "German proverb"
    },
    {
      quote: "Society develops wit, but its contemplation alone forms genius.",
     person: "Madame de Stael"
    },
    {
      quote: "The simplest things are often the truest.",
     person: "Richard Bach"
    },
    {
      quote: "Everyone smiles in the same language.",
     person: null
    },
    {
      quote: "Yesterday I dared to struggle. Today I dare to win.",
     person: "Bernadette Devlin"
    },
    {
      quote: "No alibi will save you from accepting the responsibility.",
     person: "Napoleon Hill"
    },
    {
      quote: "If you can dream it, you can do it.",
     person: "Walt Disney"
    },
    {
      quote: "It is better to travel well than to arrive.",
     person: "Buddha"
    },
    {
      quote: "Life shrinks or expands in proportion to one's courage.",
     person: "Anais Nin"
    },
    {
      quote: "You have to believe in yourself.",
     person: "Sun Tzu"
    },
    {
      quote: "Our intention creates our reality.",
     person: "Wayne Dyer"
    },
    {
      quote: "Silence is a true friend who never betrays.",
     person: "Confucius"
    },
    {
      quote: "Character develops itself in the stream of life.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "From little acorns mighty oaks do grow.",
     person: "American proverb"
    },
    {
      quote: "You can't stop the waves, but you can learn to surf.",
     person: "Jon Kabat-Zinn"
    },
    {
      quote: "Reality does not conform to the ideal, but confirms it.",
     person: "Gustave Flaubert"
    },
    {
      quote: "Speak low, if you speak love.",
     person: "William Shakespeare"
    },
    {
      quote: "A really great talent finds its happiness in execution.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Reality leaves a lot to the imagination.",
     person: "John Lennon"
    },
    {
      quote: "The greatest remedy for anger is delay.",
     person: "Seneca"
    },
    {
      quote: "Growth itself contains the germ of happiness.",
     person: "Pearl Buck"
    },
    {
      quote: "You can do what's reasonable or you can decide what's possible.",
     person: null
    },
    {
      quote: "Nothing strengthens  personity so much as silence.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "Wherever you go, go with all your heart.",
     person: "Confucius"
    },
    {
      quote: "The only real valuable thing is intuition.",
     person: "Albert Einstein"
    },
    {
      quote: "Good luck is another name for tenacity of purpose.",
     person: "Ralph Emerson"
    },
    {
      quote: "Rainbows apologize for angry skies.",
     person: "Sylvia Voirol"
    },
    {
      quote: "Friendship isn't a big thing. It's a million little things.",
     person: null
    },
    {
      quote: "Time is the most valuable thing a man can spend.",
     person: "Theophrastus"
    },
    {
      quote: "Whatever happens, take responsibility.",
     person: "Tony Robbins"
    },
    {
      quote: "Experience is simply the name we give our mistakes.",
     person: "Oscar Wilde"
    },
    {
      quote: "I think and that is all that I am.",
     person: "Wayne Dyer"
    },
    {
      quote: "A good plan today is better than a perfect plan tomorrow.",
     person: null
    },
    {
      quote: "If the shoe doesn't fit, must we change the foot?",
     person: "Gloria Steinem"
    },
    {
      quote: "Each day provides its own gifts.",
     person: "Marcus Aurelius"
    },
    {
      quote: "While we stop to think, we often miss our opportunity.",
     person: "Publilius Syrus"
    },
    {
      quote: "Life isn't about finding yourself. Life is about creating yourself.",
     person: "Bernard Shaw"
    },
    {
      quote: "To bring anything into your life, imagine that it's already there.",
     person: "Richard Bach"
    },
    {
      quote: "Begin to weave and God will give you the thread.",
     person: "German proverb"
    },
    {
      quote: "The more you know yourself, the more you forgive yourself.",
     person: "Confucius"
    },
    {
      quote: "Someone remembers, someone cares; your name is whispered in someone's prayers.",
     person: null
    },
    {
      quote: "Without faith, nothing is possible. With it, nothing is impossible.",
     person: "Mary Bethune"
    },
    {
      quote: "Once we accept our limits, we go beyond them.",
     person: "Albert Einstein"
    },
    {
      quote: "Don't be pushed by your problems; be led by your dreams.",
     person: null
    },
    {
      quote: "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
     person: "Brian Tracy"
    },
    {
      quote: "Everything you can imagine is real.",
     person: "Pablo Picasso"
    },
    {
      quote: "Fear is a darkroom where negatives develop.",
     person: "Usman Asif"
    },
    {
      quote: "The truest wisdom is a resolute determination.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "Life is the flower for which love is the honey.",
     person: "Victor Hugo"
    },
    {
      quote: "Freedom is the right to live as we wish.",
     person: "Epictetus"
    },
    {
      quote: "Change your thoughts, change your life!",
     person: null
    },
    {
      quote: "Never ignore a gut feeling, but never believe that it's enough.",
     person: "Robert Heller"
    },
    {
      quote: "Loss is nothing else but change,and change is Natures delight.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Someone is special only if you tell them.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Today is the tomorrow you worried about yesterday.",
     person: null
    },
    {
      quote: "There is no way to happiness, happiness is the way.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "The day always looks brighter from behind a smile.",
     person: null
    },
    {
      quote: "A stumble may prevent a fall.",
     person: null
    },
    {
      quote: "He who talks more is sooner exhausted.",
     person: "Lao Tzu"
    },
    {
      quote: "He who is contented is rich.",
     person: "Lao Tzu"
    },
    {
      quote: "What we achieve inwardly will change outer reality.",
     person: "Plutarch"
    },
    {
      quote: "Our strength grows out of our weaknesses.",
     person: "Ralph Waldo Emerson"
    },
    {
      quote: "We must become the change we want to see.",
     person: "Mahatma Gandhi"
    },
    {
      quote: "Happiness is found in doing, not merely possessing.",
     person: "Napoleon Hill"
    },
    {
      quote: "Put your future in good hands your own.",
     person: null
    },
    {
      quote: "We choose our destiny in the way we treat others.",
     person: "Wit"
    },
    {
      quote: "No snowflake in an avalanche ever feels responsible.",
     person: "Voltaire"
    },
    {
      quote: "Fortune favours the brave.",
     person: "Virgil"
    },
    {
      quote: "I believe in one thing only, the power of human will.",
     person: "Joseph Stalin"
    },
    {
      quote: "The best way out is always through.",
     person: "Robert Frost"
    },
    {
      quote: "The mind unlearns with difficulty what it has long learned.",
     person: "Seneca"
    },
    {
      quote: "I destroy my enemies when I make them my friends.",
     person: "Abraham Lincoln"
    },
    {
      quote: "No garden is without its weeds.",
     person: "Thomas Fuller"
    },
    {
      quote: "There is no failure except in no longer trying.",
     person: "Elbert Hubbard"
    },
    {
      quote: "Kind words will unlock an iron door.",
     person: "Turkish proverb"
    },
    {
      quote: "Problems are only opportunities with thorns on them.",
     person: "Hugh Miller"
    },
    {
      quote: "Life is just a chance to grow a soul.",
     person: "A. Powell Davies"
    },
    {
      quote: "Mountains cannot be surmounted except by winding paths.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "May our hearts garden of awakening bloom with hundreds of flowers.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "Fortune befriends the bold.",
     person: "John Dryden"
    },
    {
      quote: "Keep true to the dreams of thy youth.",
     person: "Friedrich von Schiller"
    },
    {
      quote: "You're never a loser until you quit trying.",
     person: "Mike Ditka"
    },
    {
      quote: "Science is organized knowledge. Wisdom is organized life.",
     person: "Immanuel Kant"
    },
    {
      quote: "Knowing is not enough; we must apply!",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Strong beliefs win strong men, and then make them stronger.",
     person: "Richard Bach"
    },
    {
      quote: "Autumn is a second spring when every leaf is a flower.",
     person: "Albert Camus"
    },
    {
      quote: "If you surrender to the wind, you can ride it.",
     person: "Toni Morrison"
    },
    {
      quote: "Keep yourself to the sunshine and you cannot see the shadow.",
     person: "Helen Keller"
    },
    {
      quote: "Write your plans in pencil and give God the eraser.",
     person: "Paulo Coelho"
    },
    {
      quote: "Inspiration exists, but it has to find us working.",
     person: "Pablo Picasso"
    },
    {
      quote: "Pick battles big enough to matter, small enough to win.",
     person: "Jonathan Kozol"
    },
    {
      quote: "Don't compromise yourself. You are all you've got.",
     person: "Janis Joplin"
    },
    {
      quote: "A short saying oft contains much wisdom.",
     person: "Sophocles"
    },
    {
      quote: "Difficulties are things that show a  person what they are.",
     person: "Epictetus"
    },
    {
      quote: "When you doubt your power, you give power to your doubt.",
     person: "Honore de Balzac"
    },
    {
      quote: "The cause is hidden. The effect is visible to all.",
     person: "Ovid"
    },
    {
      quote: "A prudent question is one half of wisdom.",
     person: "Francis Bacon"
    },
    {
      quote: "The path to success is to take massive, determined action.",
     person: "Tony Robbins"
    },
    {
      quote: "I allow my intuition to lead my path.",
     person: "Manuel Puig"
    },
    {
      quote: "Nature takes away any faculty that is not used.",
     person: "William R. Inge"
    },
    {
      quote: "If you wish to be a writer, write.",
     person: "Epictetus"
    },
    {
      quote: "There is no way to prosperity, prosperity is the way.",
     person: "Wayne Dyer"
    },
    {
      quote: "Either you run the day or the day runs you.",
     person: "Jim Rohn"
    },
    {
      quote: "Better be ignorant of a matter than half know it.",
     person: "Publilius Syrus"
    },
    {
      quote: "Follow your instincts. That is where true wisdom manifests itself.",
     person: "Oprah Winfrey"
    },
    {
      quote: "There never was a good knife made of bad steel.",
     person: "Benjamin Franklin"
    },
    {
      quote: "To accomplish great things, we must dream as well as act.",
     person: "Anatole France"
    },
    {
      quote: "Patience is the companion of wisdom.",
     person: "Saint Augustine"
    },
    {
      quote: "The mind is everything. What you think you become.",
     person: "Buddha"
    },
    {
      quote: "To enjoy life, we must touch much of it lightly.",
     person: "Voltaire"
    },
    {
      quote: "To fly, we have to have resistance.",
     person: "Maya Lin"
    },
    {
      quote: "What you see depends on what you're looking for.",
     person: null
    },
    {
      quote: "The heart has its reasons which reason knows not of.",
     person: "Blaise Pascal"
    },
    {
      quote: "Be great in act, as you have been in thought.",
     person: "William Shakespeare"
    },
    {
      quote: "Imagination rules the world.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "Kind words do not cost much. Yet they accomplish much.",
     person: "Blaise Pascal"
    },
    {
      quote: "There is no greater harm than that of time wasted.",
     person: "Michelangelo"
    },
    {
      quote: "Intuition will tell the thinking mind where to look next.",
     person: "Jonas Salk"
    },
    {
      quote: "Worry gives a small thing a big shadow.",
     person: null
    },
    {
      quote: "Fears are nothing more than a state of mind.",
     person: "Napoleon Hill"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
     person: "Lao Tzu"
    },
    {
      quote: "Efficiency is doing things right; effectiveness is doing the right things.",
     person: "Peter Drucker"
    },
    {
      quote: "Blaze with the fire that is never extinguished.",
     person: "Luisa Sigea"
    },
    {
      quote: "Don't cry because it's over. Smile because it happened.",
     person: "Dr. Seuss"
    },
    {
      quote: "No is easier to do. Yes is easier to say.",
     person: "Jason Fried"
    },
    {
      quote: "To be wrong is nothing unless you continue to remember it.",
     person: "Confucius"
    },
    {
      quote: "Yesterdays home runs don't win today's games.",
     person: "Babe Ruth"
    },
    {
      quote: "Silence is deep as Eternity, Speech is shallow as Time.",
     person: "Carlyle"
    },
    {
      quote: "Don't smother each other. No one can grow in the shade.",
     person: "Leo F. Buscaglia"
    },
    {
      quote: "An ant on the move does more than a dozing ox",
     person: "Lao Tzu"
    },
    {
      quote: "You can't shake hands with a clenched fist.",
     person: "Indira Gandhi"
    },
    {
      quote: "A good decision is based on knowledge and not on numbers.",
     person: "Plato"
    },
    {
      quote: "The cautious seldom err.",
     person: "Confucius"
    },
    {
      quote: "If there is no struggle, there is no progress.",
     person: "Frederick Douglass"
    },
    {
      quote: "Where there is great love, there are always miracles.",
     person: "Willa Cather"
    },
    {
      quote: "Time you enjoy wasting, was not wasted.",
     person: "John Lennon"
    },
    {
      quote: "Every problem has a gift for you in its hands.",
     person: "Richard Bach"
    },
    {
      quote: "Sadness flies away on the wings of time.",
     person: "Jean de la Fontaine"
    },
    {
      quote: "I have often regretted my speech, never my silence.",
     person: "Publilius Syrus"
    },
    {
      quote: "Never put off till tomorrow what you can do today.",
     person: "Thomas Jefferson"
    },
    {
      quote: "Minds are like parachutes. They only function when open.",
     person: "Thomas Dewar"
    },
    {
      quote: "If a man does his best, what else is there?",
     person: "George Patton"
    },
    {
      quote: "The secret of success is constancy to purpose.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "Life is a progress, and not a station.",
     person: "Ralph Emerson"
    },
    {
      quote: "All seasons are beautiful for the  person who carries happiness within.",
     person: "Horace Friess"
    },
    {
      quote: "To avoid criticism, do nothing, say nothing, be nothing.",
     person: "Elbert Hubbard"
    },
    {
      quote: "All things change; nothing perishes.",
     person: "Ovid"
    },
    {
      quote: "Absence makes the heart grow fonder.",
     person: "Haynes Bayly"
    },
    {
      quote: "Imagination is the highest kite one can fly.",
     person: "Lauren Bacall"
    },
    {
      quote: "The beginning of knowledge is the discovery of something we do not understand.",
     person: "Frank Herbert"
    },
    {
      quote: "Love doesn't make the world go round, love is what makes the ride worthwhile.",
     person: "Elizabeth Browning"
    },
    {
      quote: "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
     person: "Arthur Conan Doyle"
    },
    {
      quote: "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
     person: "J. Willard Marriott"
    },
    {
      quote: "I believe that we are fundamentally the same and have the same basic potential.",
     person: "Dalai Lama"
    },
    {
      quote: "The winds and waves are always on the side of the ablest navigators.",
     person: "Edward Gibbon"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "To get something you never had, you have to do something you never did.",
     person: null
    },
    {
      quote: "Be thankful when you don't know something for it gives you the opportunity to learn.",
     person: null
    },
    {
      quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
     person: "Mahatma Gandhi"
    },
    {
      quote: "Each misfortune you encounter will carry in it the seed of tomorrows good luck.",
     person: "Og Mandino"
    },
    {
      quote: "To forgive is to set a prisoner free and realize that prisoner was you.",
     person: "Lewis B. Smedes"
    },
    {
      quote: "In separateness lies the world's great misery, in compassion lies the world's true strength.",
     person: "Buddha"
    },
    {
      quote: "By believing passionately in something that does not yet exist, we create it.",
     person: "Nikos Kazantzakis"
    },
    {
      quote: "Letting go is not the end of the world; it is the beginning of a new life.",
     person: null
    },
    {
      quote: "All the great performers I have worked with are fuelled by a  personal dream.",
     person: "John Eliot"
    },
    {
      quote: "One of the advantages of being disorderly is that one is constantly making exciting discoveries.",
     person: "A. A. Milne"
    },
    {
      quote: "I never see what has been done; I only see what remains to be done.",
     person: "Marie Curie"
    },
    {
      quote: "Begin at once to live and count each separate day as a separate life.",
     person: "Seneca"
    },
    {
      quote: "If you don't know where you are going, you will probably end up somewhere else.",
     person: "Lawrence Peter"
    },
    {
      quote: "It is not so important to know everything as to appreciate what we learn.",
     person: "Hannah More"
    },
    {
      quote: "The bird of paradise alights only upon the hand that does not grasp.",
     person: "John Berry"
    },
    {
      quote: "Think as a wise man but communicate in the language of the people.",
     person: "William Yeats"
    },
    {
      quote: "Practice yourself, for heavens sake in little things, and then proceed to greater.",
     person: "Epictetus"
    },
    {
      quote: "If one does not know to which port is sailing, no wind is favorable.",
     person: "Seneca"
    },
    {
      quote: "Our greatest glory is not in never failing but rising everytime we fall.",
     person: null
    },
    {
      quote: "Being right is highly overrated. Even a stopped clock is right twice a day.",
     person: null
    },
    {
      quote: "To be upset over what you don't have is to waste what you do have.",
     person: "Ken S. Keyes"
    },
    {
      quote: "If we did the things we are capable of, we would astound ourselves.",
     person: "Thomas Edison"
    },
    {
      quote: "Nothing in life is to be feared. It is only to be understood.",
     person: "Marie Curie"
    },
    {
      quote: "Successful people ask better questions, and as a result, they get better answers.",
     person: "Tony Robbins"
    },
    {
      quote: "Love is not blind; it simply enables one to see things others fail to see.",
     person: null
    },
    {
      quote: "Life is a process. We are a process. The universe is a process.",
     person: "Anne Schaef"
    },
    {
      quote: "I think somehow we learn who we really are and then live with that decision.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "We learn what we have said from those who listen to our speaking.",
     person: "Kenneth Patton"
    },
    {
      quote: "A little knowledge that acts is worth infinitely more than much knowledge that is idle.",
     person: "Kahlil Gibran"
    },
    {
      quote: "If you get up one more time than you fall, you will make it through.",
     person: null
    },
    {
      quote: "The doors we open and close each day decide the lives we live.",
     person: "Flora Whittemore"
    },
    {
      quote: "The worst bankrupt in the world is the  person who has lost his enthusiasm.",
     person: "H. W. Arnold"
    },
    {
      quote: "Happiness comes when your work and words are of benefit to yourself and others.",
     person: "Buddha"
    },
    {
      quote: "Don't focus on making the right decision, focus on making the decision the right one.",
     person: null
    },
    {
      quote: "Everything is perfect in the universe even your desire to improve it.",
     person: "Wayne Dyer"
    },
    {
      quote: "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
     person: "Eden Phillpotts"
    },
    {
      quote: "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
     person: "Buddha"
    },
    {
      quote: "A thing long expected takes the form of the unexpected when at last it comes.",
     person: "Mark Twain"
    },
    {
      quote: "Action may not always bring happiness; but there is no happiness without action.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "I don't believe in failure. It is not failure if you enjoyed the process.",
     person: "Oprah Winfrey"
    },
    {
      quote: "What you do not want done to yourself, do not do to others.",
     person: "Confucius"
    },
    {
      quote: "Short words are best and the old words when short are best of all.",
     person: "Winston Churchill"
    },
    {
      quote: "If you light a lamp for somebody, it will also brighten your path.",
     person: "Buddha"
    },
    {
      quote: "I have done my best: that is about all the philosophy of living one needs.",
     person: "Lin-yutang"
    },
    {
      quote: "Through perseverance many people win success out of what seemed destined to be certain failure.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "Give thanks for the rain of life that propels us to reach new horizons.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Love is just a word until someone comes along and gives it meaning.",
     person: null
    },
    {
      quote: "We all have problems. The way we solve them is what makes us different.",
     person: null
    },
    {
      quote: "The secret to a rich life is to have more beginnings than endings.",
     person: "Dave Weinbaum"
    },
    {
      quote: "It is only when the mind and character slumber that the dress can be seen.",
     person: "Ralph Waldo Emerson"
    },
    {
      quote: "If you don't like something, change it. If you can't change it, change your attitude.",
     person: "Maya Angelou"
    },
    {
      quote: "Reviewing what you have learned and learning anew, you are fit to be a teacher.",
     person: "Confucius"
    },
    {
      quote: "The world is a book, and those who do not travel read only a page.",
     person: "Augustinus Sanctus"
    },
    {
      quote: "So long as a  person is capable of self-renewal they are a living being.",
     person: "Henri-Frederic Amiel"
    },
    {
      quote: "I'm not afraid of storms, for I'm learning how to sail my ship.",
     person: "Louisa Alcott"
    },
    {
      quote: "Think for yourselves and let others enjoy the privilege to do so too.",
     person: "Voltaire"
    },
    {
      quote: "How we spend our days is, of course, how we spend our lives.",
     person: "Annie Dillard"
    },
    {
      quote: "It has never been my object to record my dreams, just to realize them.",
     person: "Man Ray"
    },
    {
      quote: "The most complicated achievements of thought are possible without the assistance of consciousness.",
     person: "Sigmund Freud"
    },
    {
      quote: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
     person: "Wayne Dyer"
    },
    {
      quote: "Most great people have attained their greatest success just one step beyond their greatest failure.",
     person: "Napoleon Hill"
    },
    {
      quote: "If you think you can, you can. And if you think you can't, you're right.",
     person: "Henry Ford"
    },
    {
      quote: "Better to have loved and lost, than to have never loved at all.",
     person: "St. Augustine"
    },
    {
      quote: "Everyone thinks of changing the world, but no one thinks of changing himself.",
     person: "Leo Tolstoy"
    },
    {
      quote: "The best way to pay for a lovely moment is to enjoy it.",
     person: "Richard Bach"
    },
    {
      quote: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
     person: "Winston Churchill"
    },
    {
      quote: "Slow down and everything you are chasing will come around and catch you.",
     person: "John De Paola"
    },
    {
      quote: "Your worst enemy cannot harm you as much as your own unguarded thoughts.",
     person: "Buddha"
    },
    {
      quote: "I always wanted to be somebody, but I should have been more specific.",
     person: "Lily Tomlin"
    },
    {
      quote: "Yeah we all shine on, like the moon, and the stars, and the sun.",
     person: "John Lennon"
    },
    {
      quote: "Knowledge is a process of piling up facts; wisdom lies in their simplification.",
     person: "Martin Fischer"
    },
    {
      quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
     person: "Albert Einstein"
    },
    {
      quote: "We should all be thankful for those people who rekindle the inner spirit.",
     person: "Albert Schweitzer"
    },
    {
      quote: "Opportunity is missed by most because it is dressed in overalls and looks like work.",
     person: "Thomas Edison"
    },
    {
      quote: "Feeling and longing are the motive forces behind all human endeavor and human creations.",
     person: "Albert Einstein"
    },
    {
      quote: "In the end we retain from our studies only that which we practically apply.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "If you correct your mind, the rest of your life will fall into place.",
     person: "Lao Tzu"
    },
    {
      quote: "The world makes way for the man who knows where he is going.",
     person: "Ralph Emerson"
    },
    {
      quote: "When your desires are strong enough you will appear to possess superhuman powers to achieve.",
     person: "Napoleon Hill"
    },
    {
      quote: "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.",
     person: "John Adams"
    },
    {
      quote: "I cannot make my days longer so I strive to make them better.",
     person: "Henry David Thoreau"
    },
    {
      quote: "Tension is who you think you should be. Relaxation is who you are.",
     person: "Chinese proverb"
    },
    {
      quote: "Never bend your head. Always hold it high. Look the world right in the eye.",
     person: "Helen Keller"
    },
    {
      quote: "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.",
     person: "Albert Schweitzer"
    },
    {
      quote: "We cannot do everything at once, but we can do something at once.",
     person: "Calvin Coolidge"
    },
    {
      quote: "You have to do your own growing no matter how tall your grandfather was.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.",
     person: null
    },
    {
      quote: "It is fatal to enter any war without the will to win it.",
     person: "General Douglas MacArthur"
    },
    {
      quote: "Be what you are. This is the first step toward becoming better than you are.",
     person: "Julius Charles Hare"
    },
    {
      quote: "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
     person: "Buckminster Fuller"
    },
    {
      quote: "Love and compassion open our own inner life, reducing stress, distrust and loneliness.",
     person: "Dalai Lama"
    },
    {
      quote: "Ideals are an imaginative understanding of that which is desirable in that which is possible.",
     person: "Walter Lippmann"
    },
    {
      quote: "The superior man is satisfied and composed; the mean man is always full of distress.",
     person: "Confucius"
    },
    {
      quote: "If you spend too much time thinking about a thing, you'll never get it done.",
     person: "Bruce Lee"
    },
    {
      quote: "The way is not in the sky. The way is in the heart.",
     person: "Buddha"
    },
    {
      quote: "Most people are about as happy as they make up their minds to be",
     person: "Abraham Lincoln"
    },
    {
      quote: "Three things cannot be long hidden: the sun, the moon, and the truth.",
     person: "Buddha"
    },
    {
      quote: "More often than not, anger is actually an indication of weakness rather than of strength.",
     person: "Dalai Lama"
    },
    {
      quote: "Before you put on a frown, make absolutely sure there are no smiles available.",
     person: "Jim Beggs"
    },
    {
      quote: "A man of ability and the desire to accomplish something can do anything.",
     person: "Donald Kircher"
    },
    {
      quote: "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
     person: "Buddha"
    },
    {
      quote: "It is not uncommon for people to spend their whole life waiting to start living.",
     person: "Eckhart Tolle"
    },
    {
      quote: "Don't be afraid to go out on a limb. That's where the fruit is.",
     person: "H. Jackson Browne"
    },
    {
      quote: "Wicked people are always surprised to find ability in those that are good.",
     person: "Marquis Vauvenargues"
    },
    {
      quote: "Life is so constructed that an event does not, cannot, will not, match the expectation.",
     person: "Charlotte Bronte"
    },
    {
      quote: "If you change the way you look at things, the things you look at change.",
     person: "Wayne Dyer"
    },
    {
      quote: "No man can succeed in a line of endeavor which he does not like.",
     person: "Napoleon Hill"
    },
    {
      quote: "You will not be punished for your anger, you will be punished by your anger.",
     person: "Buddha"
    },
    {
      quote: "Don't judge each day by the harvest you reap but by the seeds you plant.",
     person: "Robert Stevenson"
    },
    {
      quote: "They say that time changes things, but you actually have to change them yourself.",
     person: "Andy Warhol"
    },
    {
      quote: "Never apologize for showing feelings. When you do so, you apologize for the truth.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "The truth you believe and cling to makes you unavailable to hear anything new.",
     person: "Pema Chodron"
    },
    {
      quote: "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.",
     person: "Horace"
    },
    {
      quote: "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.",
     person: "Morris West"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
     person: "Franklin Roosevelt"
    },
    {
      quote: "Every action of our lives touches on some chord that will vibrate in eternity.",
     person: "Edwin Chapin"
    },
    {
      quote: "Shoot for the moon. Even if you miss, you'll land among the stars.",
     person: "Les Brown"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
     person: "Confucius"
    },
    {
      quote: "Every day may not be good, but there's something good in every day.",
     person: null
    },
    {
      quote: "Most folks are about as happy as they make up their minds to be.",
     person: "Abraham Lincoln"
    },
    {
      quote: "If you would take, you must first give, this is the beginning of intelligence.",
     person: "Lao Tzu"
    },
    {
      quote: "Some people think it's holding that makes one strong sometimes it's letting go.",
     person: null
    },
    {
      quote: "It is on our failures that we base a new and different and better success.",
     person: "Havelock Ellis"
    },
    {
      quote: "Quality is never an accident; it is always the result of intelligent effort.",
     person: "John Ruskin"
    },
    {
      quote: "To study and not think is a waste. To think and not study is dangerous.",
     person: "Confucius"
    },
    {
      quote: "Life is a succession of lessons, which must be lived to be understood.",
     person: "Ralph Emerson"
    },
    {
      quote: "Time changes everything except something within us which is always surprised by change.",
     person: "Thomas Hardy"
    },
    {
      quote: "You are important enough to ask and you are blessed enough to receive back.",
     person: "Wayne Dyer"
    },
    {
      quote: "If you cannot do great things, do small things in a great way.",
     person: "Napoleon Hill"
    },
    {
      quote: "If you want your life to be more rewarding, you have to change the way you think.",
     person: "Oprah Winfrey"
    },
    {
      quote: "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us.",
     person: "Byron Pulsifer"
    },
    {
      quote: "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.",
     person: "Leonardo Ruiz"
    },
    {
      quote: "The free man is he who does not fear to go to the end of his thought.",
     person: "Leon Blum"
    },
    {
      quote: "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.",
     person: "Ralph Emerson"
    },
    {
      quote: "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
     person: "Bernard Shaw"
    },
    {
      quote: "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.",
     person: "Lao Tzu"
    },
    {
      quote: "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
     person: "Charles Dickens"
    },
    {
      quote: "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
     person: "Dalai Lama"
    },
    {
      quote: "We come to love not by finding a perfect  person, but by learning to see an imperfect  person perfectly.",
     person: "Sam Keen"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
     person: "Walt Emerson"
    },
    {
      quote: "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.",
     person: "John Astin"
    },
    {
      quote: "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
     person: "Elbert Hubbard"
    },
    {
      quote: "There is no retirement for an artist, it's your way of living so there is no end to it.",
     person: "Henry Moore"
    },
    {
      quote: "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.",
     person: "Confucius"
    },
    {
      quote: "Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?",
     person: null
    },
    {
      quote: "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
     person: "Laozi"
    },
    {
      quote: "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
     person: "William Shakespeare"
    },
    {
      quote: "Success means having the courage, the determination, and the will to become the  person you believe you were meant to be.",
     person: "George Sheehan"
    },
    {
      quote: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
     person: "Thomas Jefferson"
    },
    {
      quote: "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
     person: "Antoine de Saint-Exupery"
    },
    {
      quote: "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
     person: "Marcel Proust"
    },
    {
      quote: "Make the best use of what is in your power, and take the rest as it happens.",
     person: "Epictetus"
    },
    {
      quote: "The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
     person: "Louise Hay"
    },
    {
      quote: "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.",
     person: "W. Clement Stone"
    },
    {
      quote: "The reason most goals are not achieved is that we spend our time doing second things first.",
     person: "Robert McKain"
    },
    {
      quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
     person: "John Quincy Adams"
    },
    {
      quote: "I'm a great believer in luck and I find the harder I work, the more I have of it.",
     person: "Thomas Jefferson"
    },
    {
      quote: "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.",
     person: "Ralph Emerson"
    },
    {
      quote: "The  person born with a talent they are meant to use will find their greatest happiness in using it.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
     person: "William Saroyan"
    },
    {
      quote: "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
     person: "Isaac Asimov"
    },
    {
      quote: "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
     person: "Henry Van Dyke"
    },
    {
      quote: "You got to be careful if you don't know where you're going, because you might not get there.",
     person: "Yogi Berra"
    },
    {
      quote: "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
     person: "Naguib Mahfouz"
    },
    {
      quote: "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
     person: "Anthony Robbins"
    },
    {
      quote: "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.",
     person: "John Wooden"
    },
    {
      quote: "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
     person: "Og Mandino"
    },
    {
      quote: "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.",
     person: "Jane Addams"
    },
    {
      quote: "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.",
     person: "Thomas Carlyle"
    },
    {
      quote: "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
     person: "M. Scott Peck"
    },
    {
      quote: "The minute you settle for less than you deserve, you get even less than you settled for.",
     person: "Maureen Dowd"
    },
    {
      quote: "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.",
     person: "Charles Darwin"
    },
    {
      quote: "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.",
     person: null
    },
    {
      quote: "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.",
     person: "Dalai Lama"
    },
    {
      quote: "There is only one success to be able to spend your life in your own way.",
     person: "Christopher Morley"
    },
    {
      quote: "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
     person: "Hannah Arendt"
    },
    {
      quote: "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.",
     person: "Alan Cohen"
    },
    {
      quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.",
     person: "Aldous Huxley"
    },
    {
      quote: "You're not obligated to win. You're obligated to keep trying to do the best you can every day.",
     person: "Marian Edelman"
    },
    {
      quote: "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.",
     person: "Sue Patton Thoele"
    },
    {
      quote: "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.",
     person: "Frank Crane"
    },
    {
      quote: "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.",
     person: "Lao Tzu"
    },
    {
      quote: "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
     person: "Kathleen Norris"
    },
    {
      quote: "Choose a job you love, and you will never have to work a day in your life.",
     person: "Confucius"
    },
    {
      quote: "You cannot find yourself by going into the past. You can find yourself by coming into the present.",
     person: "Eckhart Tolle"
    },
    {
      quote: "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.",
     person: "Anne Bronte"
    },
    {
      quote: "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.",
     person: "Richard Bach"
    },
    {
      quote: "The fox has many tricks. The hedgehog has but one. But that is the best of all.",
     person: "Desiderius Erasmus"
    },
    {
      quote: "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
     person: "Arthur Rubinstein"
    },
    {
      quote: "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity",
     person: "Louis Pasteur"
    },
    {
      quote: "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.",
     person: "Rumi"
    },
    {
      quote: "We must never forget that it is through our actions, words, and thoughts that we have a choice.",
     person: "Sogyal Rinpoche"
    },
    {
      quote: "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.",
     person: "Dennis Kimbro"
    },
    {
      quote: "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.",
     person: "William Penn"
    },
    {
      quote: "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
     person: "Immanuel Kant"
    },
    {
      quote: "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
     person: "Buddha"
    },
    {
      quote: "As the rest of the world is walking out the door, your best friends are the ones walking in.",
     person: null
    },
    {
      quote: "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.",
     person: "Robert Lynd"
    },
    {
      quote: "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.",
     person: "Ralph Emerson"
    },
    {
      quote: "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.",
     person: "Donald Trump"
    },
    {
      quote: "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.",
     person: "Robert Fulghum"
    },
    {
      quote: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
     person: "Bruce Lee"
    },
    {
      quote: "Every man takes the limits of his own field of vision for the limits of the world.",
     person: "Arthur Schopenhauer"
    },
    {
      quote: "One does not discover new lands without consenting to lose sight of the shore for a very long time.",
     person: "Andre Gide"
    },
    {
      quote: "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
     person: "Sai Baba"
    },
    {
      quote: "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?",
     person: "Dalai Lama"
    },
    {
      quote: "Life is like a sewer. What you get out of it depends on what you put into it.",
     person: "Tom Lehrer"
    },
    {
      quote: "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
     person: "Bruce Lee"
    },
    {
      quote: "Learn all you can from the mistakes of others. You won't have time to make them all yourself.",
     person: "Alfred Sheinwold"
    },
    {
      quote: "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
     person: "Sri Chinmoy"
    },
    {
      quote: "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.",
     person: "James Freeman Clarke"
    },
    {
      quote: "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.",
     person: "Anais Nin"
    },
    {
      quote: "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.",
     person: "Marcus Aurelius"
    },
    {
      quote: "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
     person: "Wayne Dyer"
    },
    {
      quote: "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
     person: "Buddha"
    },
    {
      quote: "It is the greatest of all mistakes to do nothing because you can only do little do what you can.",
     person: "Sydney Smith"
    },
    {
      quote: "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.",
     person: "Confucius"
    },
    {
      quote: "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
     person: "Mary Kay Ash"
    },
    {
      quote: "Those who try to do something and fail are infinitely better than those who try nothing and succeed.",
     person: "Lloyd Jones"
    },
    {
      quote: "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.",
     person: "Vista Kelly"
    },
    {
      quote: "The first step to getting the things you want out of life is this: decide what you want.",
     person: "Ben Stein"
    },
    {
      quote: "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
     person: null
    },
    {
      quote: "Experience is not what happens to a man. It is what a man does with what happens to him.",
     person: "Aldous Huxley"
    },
    {
      quote: "A good teacher is like a candle it consumes itself to light the way for others.",
     person: null
    },
    {
      quote: "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
     person: "Oscar Wilde"
    },
    {
      quote: "Life is not measured by the breaths we take, but by the moments that take our breath.",
     person: null
    },
    {
      quote: "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
     person: "Honore de Balzac"
    },
    {
      quote: "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.",
     person: "Jacob Braude"
    },
    {
      quote: "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.",
     person: "Vince Lombardi"
    },
    {
      quote: "What lies behind us and what lies before us are small matters compared to what lies within us.",
     person: "Oliver Holmes"
    },
    {
      quote: "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.",
     person: "Dalai Lama"
    },
    {
      quote: "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
     person: "Nelson Mandela"
    },
    {
      quote: "Forget about all the reasons why something may not work. You only need to find one good reason why it will.",
     person: "Robert Anthony"
    },
    {
      quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
     person: "Aristotle"
    },
    {
      quote: "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
     person: "Washington Irving"
    },
    {
      quote: "We all live with the objective of being happy; our lives are all different and yet the same.",
     person: "Anne Frank"
    },
    {
      quote: "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.",
     person: "Byron Pulsifer"
    },
    {
      quote: "To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
     person: "Buddha"
    },
    {
      quote: "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
     person: "Jessamyn West"
    },
    {
      quote: "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
     person: "Plato"
    },
    {
      quote: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful  personality and duplicate it.",
     person: "Bruce Lee"
    },
    {
      quote: "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!",
     person: "Charlotte Gilman"
    },
    {
      quote: "Every time you smile at someone, it is an action of love, a gift to that  person, a beautiful thing.",
     person: "Mother Teresa"
    },
    {
      quote: "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.",
     person: "Margaret Runbeck"
    },
    {
      quote: "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.",
     person: "Dalai Lama"
    },
    {
      quote: "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
     person: "Ovid"
    },
    {
      quote: "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.",
     person: "Og Mandino"
    },
    {
      quote: "We never understand how little we need in this world until we know the loss of it.",
     person: "James Barrie"
    },
    {
      quote: "The real measure of your wealth is how much youd be worth if you lost all your money.",
     person: null
    },
    {
      quote: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
     person: "Buddha"
    },
    {
      quote: "Take no thought of who is right or wrong or who is better than. Be not for or against.",
     person: "Bruce Lee"
    },
    {
      quote: "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.",
     person: "Everett Dirksen"
    },
    {
      quote: "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.",
     person: "Byron Pulsifer"
    },
    {
      quote: "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
     person: "Henry Miller"
    },
    {
      quote: "At the center of your being you have the answer; you know who you are and you know what you want.",
     person: "Lao Tzu"
    },
    {
      quote: "How wonderful that we have met with a paradox. Now we have some hope of making progress.",
     person: "Niels Bohr"
    },
    {
      quote: "Everyone is a genius at least once a year. A real genius has his original ideas closer together.",
     person: "Georg Lichtenberg"
    },
    {
      quote: "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.",
     person: "Anais Nin"
    },
    {
      quote: "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
     person: "Gloria Steinem"
    },
    {
      quote: "Sadness may be part of life but there is no need to let it dominate your entire life.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.",
     person: "Charles Schwab"
    },
    {
      quote: "Nature gave us one tongue and two ears so we could hear twice as much as we speak.",
     person: "Epictetus"
    },
    {
      quote: "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.",
     person: "Barbara Baron"
    },
    {
      quote: "You are always free to change your mind and choose a different future, or a different past.",
     person: "Richard Bach"
    },
    {
      quote: "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
     person: "Lou Holtz"
    },
    {
      quote: "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
     person: "Napoleon Hill"
    },
    {
      quote: "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
     person: "Napoleon Hill"
    },
    {
      quote: "To be what we are, and to become what we are capable of becoming, is the only end of life.",
     person: "Robert Stevenson"
    },
    {
      quote: "The road leading to a goal does not separate you from the destination; it is essentially a part of it.",
     person: "Charles DeLint"
    },
    {
      quote: "Take things as they are. Punch when you have to punch. Kick when you have to kick.",
     person: "Bruce Lee"
    },
    {
      quote: "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.",
     person: "Albert Einstein"
    },
    {
      quote: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
     person: null
    },
    {
      quote: "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
     person: "Paavo Nurmi"
    },
    {
      quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
     person: "Anne Frank"
    },
    {
      quote: "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
     person: null
    },
    {
      quote: "It is one of the blessings of old friends that you can afford to be stupid with them.",
     person: "Ralph Emerson"
    },
    {
      quote: "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
     person: "Tryon Edwards"
    },
    {
      quote: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
     person: "Abraham Lincoln"
    },
    {
      quote: "One must be fond of people and trust them if one is not to make a mess of life.",
     person: "E. M. Forster"
    },
    {
      quote: "We cannot change our memories, but we can change their meaning and the power they have over us.",
     person: "David Seamans"
    },
    {
      quote: "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?",
     person: "Confucius"
    },
    {
      quote: "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Id rather regret the things that I have done than the things that I have not done.",
     person: "Lucille Ball"
    },
    {
      quote: "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
     person: "Eckhart Tolle"
    },
    {
      quote: "If the stars should appear but one night every thousand years how man would marvel and adore.",
     person: "Ralph Emerson"
    },
    {
      quote: "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
     person: "Laurence J. Peter"
    },
    {
      quote: "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
     person: "Elizabeth Arden"
    },
    {
      quote: "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
     person: "Dalai Lama"
    },
    {
      quote: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
     person: "Confucius"
    },
    {
      quote: "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
     person: "Nikola Tesla"
    },
    {
      quote: "Blessed is the  person who is too busy to worry in the daytime, and too sleepy to worry at night.",
     person: "Leo Aikman"
    },
    {
      quote: "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
     person: "Pablo Picasso"
    },
    {
      quote: "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.",
     person: "Vernon Cooper"
    },
    {
      quote: "One secret of success in life is for a man to be ready for his opportunity when it comes.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.",
     person: "Dalai Lama"
    },
    {
      quote: "The shoe that fits one  person pinches another; there is no recipe for living that suits all cases.",
     person: "Carl Jung"
    },
    {
      quote: "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
     person: "Buddha"
    },
    {
      quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.",
     person: null
    },
    {
      quote: "Treat people as if they were what they ought to be and you help them to become what they are capable of being.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "If you focus on results, you will never change. If you focus on change, you will get results.",
     person: "Jack Dixon"
    },
    {
      quote: "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
     person: "G. K. Chesterton"
    },
    {
      quote: "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
     person: "Denis Waitley"
    },
    {
      quote: "All difficult things have their origin in that which is easy, and great things in that which is small.",
     person: "Lao-Tzu"
    },
    {
      quote: "You can be what you want to be. You have the power within and we will help you always.",
     person: "Byron Pulsifer"
    },
    {
      quote: "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.",
     person: "Johannes Gaertner"
    },
    {
      quote: "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
     person: "Doug Larson"
    },
    {
      quote: "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.",
     person: "Charles Lamb"
    },
    {
      quote: "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
     person: "John Muir"
    },
    {
      quote: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
     person: "Winston Churchill"
    },
    {
      quote: "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
     person: "Helen Keller"
    },
    {
      quote: "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.",
     person: "Buddha"
    },
    {
      quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
     person: "Thomas Edison"
    },
    {
      quote: "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
     person: "William Ward"
    },
    {
      quote: "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
     person: "Michael Jordan"
    },
    {
      quote: "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
     person: "Oliver Holmes"
    },
    {
      quote: "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
     person: "Confucius"
    },
    {
      quote: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
     person: "Epictetus"
    },
    {
      quote: "I am always doing that which I cannot do, in order that I may learn how to do it.",
     person: "Pablo Picasso"
    },
    {
      quote: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
     person: "Barack Obama"
    },
    {
      quote: "The world is round and the place which may seem like the end may also be the beginning.",
     person: "Ivy Baker Priest"
    },
    {
      quote: "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.",
     person: null
    },
    {
      quote: "Give it all you've got because you never know if there's going to be a next time.",
     person: "Danielle Ingrum"
    },
    {
      quote: "You have to take it as it happens, but you should try to make it happen the way you want to take it.",
     person: "Old German proverb"
    },
    {
      quote: "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.",
     person: "Ralph Blum"
    },
    {
      quote: "I'm not in this world to live up to your expectations and you're not in this world to live up to mine.",
     person: "Bruce Lee"
    },
    {
      quote: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "I can't imagine a  person becoming a success who doesn't give this game of life everything hes got.",
     person: "Walter Cronkite"
    },
    {
      quote: "The greatest way to live with honor in this world is to be what we pretend to be.",
     person: "Socrates"
    },
    {
      quote: "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.",
     person: "Seneca"
    },
    {
      quote: "The grand essentials of happiness are: something to do, something to love, and something to hope for.",
     person: "Chalmers"
    },
    {
      quote: "By living deeply in the present moment we can understand the past better and we can prepare for a better future.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
     person: "Ralph Emerson"
    },
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
     person: "Ralph Emerson"
    },
    {
      quote: "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
     person: "Robert Louis Stevenson"
    },
    {
      quote: "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
     person: "Napoleon Hill"
    },
    {
      quote: "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.",
     person: null
    },
    {
      quote: "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.",
     person: "Henry Thoreau"
    },
    {
      quote: "The greatest good you can do for another is not just to share your riches but to reveal to him his own.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.",
     person: "Brian Tracy"
    },
    {
      quote: "To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.",
     person: "Joan Didion"
    },
    {
      quote: "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.",
     person: "Mabel Newcomber"
    },
    {
      quote: "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.",
     person: null
    },
    {
      quote: "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.",
     person: "Robert Graves"
    },
    {
      quote: "The thing always happens that you really believe in; and the belief in a thing makes it happen.",
     person: "Frank Wright"
    },
    {
      quote: "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
     person: "Francois de La Rochefoucauld"
    },
    {
      quote: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
     person: "Epictetus"
    },
    {
      quote: "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
     person: "Margaret Cousins"
    },
    {
      quote: "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you will never get back.",
     person: null
    },
    {
      quote: "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
     person: "Thomas Carlyle"
    },
    {
      quote: "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.",
     person: "Pearl Buck"
    },
    {
      quote: "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.",
     person: "Catherine Pulsifer"
    },
    {
      quote: "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
     person: "Alfred Tennyson"
    },
    {
      quote: "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.",
     person: "Margaret Mead"
    },
    {
      quote: "Let your hook always be cast; in the pool where you least expect it, there will be a fish.",
     person: "Ovid"
    },
    {
      quote: "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.",
     person: "Remez Sasson"
    },
    {
      quote: "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.",
     person: "Richard Bach"
    },
    {
      quote: "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
     person: "Lao Tzu"
    },
    {
      quote: "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.",
     person: "Pema Chodron"
    },
    {
      quote: "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
     person: "Richard Bach"
    },
    {
      quote: "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.",
     person: "David Jordan"
    },
    {
      quote: "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!",
     person: "Richard Bach"
    },
    {
      quote: "No valid plans for the future can be made by those who have no capacity for living now.",
     person: "Alan Watts"
    },
    {
      quote: "The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for.",
     person: "Oscar Wilde"
    },
    {
      quote: "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
     person: "Anatole France"
    },
    {
      quote: "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
     person: "Thomas Edison"
    },
    {
      quote: "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.",
     person: "John Steinbeck"
    },
    {
      quote: "If we are facing in the right direction, all we have to do is keep on walking.",
     person: null
    },
    {
      quote: "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
     person: "Denis Waitley"
    },
    {
      quote: "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
     person: "Epictetus"
    },
    {
      quote: "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.",
     person: "Eknath Easwaran"
    },
    {
      quote: "We could never learn to be brave and patient if there were only joy in the world.",
     person: "Helen Keller"
    },
    {
      quote: "If it is not right do not do it; if it is not true do not say it.",
     person: "Marcus Aurelius"
    },
    {
      quote: "The truth of the matter is that you always know the right thing to do. The hard part is doing it.",
     person: "Norman Schwarzkopf"
    },
    {
      quote: "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
     person: "Julie Morgenstern"
    },
    {
      quote: "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
     person: "Blaise Pascal"
    },
    {
      quote: "Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.",
     person: "Laura Teresa Marquez"
    },
    {
      quote: "If you are patient in one moment of anger, you will escape one hundred days of sorrow.",
     person: "Chinese proverb"
    },
    {
      quote: "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Courage is not about taking risks unknowingly, but putting your own being in front of challenges that others may not be able to.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
     person: "Richard Bach"
    },
    {
      quote: "The poor man is not he who is without a cent, but he who is without a dream.",
     person: "Harry Kemp"
    },
    {
      quote: "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
     person: "Buddha"
    },
    {
      quote: "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
     person: null
    },
    {
      quote: "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.",
     person: "Helen Keller"
    },
    {
      quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
     person: "John Kennedy"
    },
    {
      quote: "You have power over your mind not outside events. Realize this, and you will find strength.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.",
     person: "Louis Pasteur"
    },
    {
      quote: "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
     person: "Buddha"
    },
    {
      quote: "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
     person: "Henry Longfellow"
    },
    {
      quote: "I cannot always control what goes on outside. But I can always control what goes on inside.",
     person: "Wayne Dyer"
    },
    {
      quote: "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
     person: "Daisaku Ikeda"
    },
    {
      quote: "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger.",
     person: "Epictetus"
    },
    {
      quote: "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
     person: "Rumi"
    },
    {
      quote: "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "With realization of ones own potential and self-confidence in ones ability, one can build a better world.",
     person: "Dalai Lama"
    },
    {
      quote: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
     person: "Franklin Roosevelt"
    },
    {
      quote: "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings.",
     person: "Pearl Buck"
    },
    {
      quote: "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
     person: "Mary Kay Ash"
    },
    {
      quote: "Try not to become a man of success, but rather try to become a man of value.",
     person: "Albert Einstein"
    },
    {
      quote: "All difficult things have their origin in that which is easy, and great things in that which is small.",
     person: "Lao Tzu"
    },
    {
      quote: "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them.",
     person: "Sophocles"
    },
    {
      quote: "It is not enough to have a good mind; the main thing is to use it well.",
     person: "Rene Descartes"
    },
    {
      quote: "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Never do things others can do and will do, if there are things others cannot do or will not do.",
     person: "Amelia Earhart"
    },
    {
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
     person: "Jimmy Dean"
    },
    {
      quote: "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to.",
     person: "George Allen"
    },
    {
      quote: "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
     person: "Joseph Roux"
    },
    {
      quote: "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are.",
     person: "Bernice Reagon"
    },
    {
      quote: "The greatest way to live with honour in this world is to be what we pretend to be.",
     person: "Socrates"
    },
    {
      quote: "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.",
     person: "Henri Bergson"
    },
    {
      quote: "Try not to become a man of success but rather try to become a man of value.",
     person: "Albert Einstein"
    },
    {
      quote: "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Your work is to discover your world and then with all your heart give yourself to it.",
     person: "Buddha"
    },
    {
      quote: "The  person who lives life fully, glowing with life's energy, is the  person who lives a successful life.",
     person: "Daisaku Ikeda"
    },
    {
      quote: "Don't turn away from possible futures before you're certain you don't have anything to learn from them.",
     person: "Richard Bach"
    },
    {
      quote: "A successful  person is one who can lay a firm foundation with the bricks that others throw at him or her.",
     person: "David Brinkley"
    },
    {
      quote: "All that we are is the result of what we have thought. The mind is everything. What we think we become.",
     person: "Buddha"
    },
    {
      quote: "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
     person: "Henri-Frederic Amiel"
    },
    {
      quote: "How far that little candle throws its beams! So shines a good deed in a naughty world.",
     person: "William Shakespeare"
    },
    {
      quote: "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
     person: "Napoleon Hill"
    },
    {
      quote: "It is in your moments of decision that your destiny is shaped.",
     person: "Tony Robbins"
    },
    {
      quote: "An obstacle may be either a stepping stone or a stumbling block.",
     person: null
    },
    {
      quote: "The pain passes, but the beauty remains.",
     person: "Pierre Auguste Renoir"
    },
    {
      quote: "All I can say about life is, Oh God, enjoy it!",
     person: "Bob Newhart"
    },
    {
      quote: "Creativity comes from trust. Trust your instincts. And never hope more than you work.",
     person: "Rita Mae Brown"
    },
    {
      quote: "Your outlook on life is a direct reflection on how much you like yourself.",
     person: "Lululemon"
    },
    {
      quote: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
     person: "Lao Tzu"
    },
    {
      quote: "You won't skid if you stay in a rut.",
     person: "Kin Hubbard"
    },
    {
      quote: "You block your dream when you allow your fear to grow bigger than your faith.",
     person: "Mary Morrissey"
    },
    {
      quote: "Happiness depends upon ourselves.",
     person: "Aristotle"
    },
    {
      quote: "Wherever a man turns he can find someone who needs him.",
     person: "Albert Schweitzer"
    },
    {
      quote: "If one is lucky, a solitary fantasy can totally transform one million realities.",
     person: "Maya Angelou"
    },
    {
      quote: "Never idealize others. They will never live up to your expectations.",
     person: "Leo Buscaglia"
    },
    {
      quote: "When you realize there is nothing lacking, the whole world belongs to you.",
     person: "Lao Tzu"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
     person: "Dalai Lama"
    },
    {
      quote: "Meaning is not what you start with but what you end up with.",
     person: "Peter Elbow"
    },
    {
      quote: "No one has ever become poor by giving.",
     person: "Anne Frank"
    },
    {
      quote: "Be faithful in small things because it is in them that your strength lies.",
     person: "Mother Teresa"
    },
    {
      quote: "All is flux; nothing stays still.",
     person: "Heraclitus"
    },
    {
      quote: "He who is fixed to a star does not change his mind.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "He who lives in harmony with himself lives in harmony with the universe.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Ignorant men don't know what good they hold in their hands until they've flung it away.",
     person: "Sophocles"
    },
    {
      quote: "When the solution is simple, God is answering.",
     person: "Albert Einstein"
    },
    {
      quote: "All achievements, all earned riches, have their beginning in an idea.",
     person: "Napoleon Hill"
    },
    {
      quote: "Do not turn back when you are just at the goal.",
     person: "Publilius Syrus"
    },
    {
      quote: "You can't trust without risk but neither can you live in a cocoon.",
     person: "Byron Pulsifer"
    },
    {
      quote: "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention.",
     person: "Rudolf Arnheim"
    },
    {
      quote: "Error is discipline through which we advance.",
     person: "Channing"
    },
    {
      quote: "The truth is always exciting. Speak it, then. Life is dull without it.",
     person: "Pearl Buck"
    },
    {
      quote: "The superior man is modest in his speech, but exceeds in his actions.",
     person: "Confucius"
    },
    {
      quote: "The longer we dwell on our misfortunes, the greater is their power to harm us.",
     person: "Voltaire"
    },
    {
      quote: "Those who will play with cats must expect to be scratched.",
     person: "Cervantes"
    },
    {
      quote: "I've never seen a smiling face that was not beautiful.",
     person: null
    },
    {
      quote: "In all things of nature there is something of the marvellous.",
     person: "Aristotle"
    },
    {
      quote: "The universe is transformation; our life is what our thoughts make it.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Memory is the mother of all wisdom.",
     person: "Samuel Johnson"
    },
    {
      quote: "Silence is the true friend that never betrays.",
     person: "Confucius"
    },
    {
      quote: "You might well remember that nothing can bring you success but yourself.",
     person: "Napoleon Hill"
    },
    {
      quote: "Watch the little things; a small leak will sink a great ship.",
     person: "Benjamin Franklin"
    },
    {
      quote: "God has given you one face, and you make yourself another.",
     person: "William Shakespeare"
    },
    {
      quote: "To be wronged is nothing unless you continue to remember it.",
     person: "Confucius"
    },
    {
      quote: "Kindness is the greatest wisdom.",
     person: null
    },
    {
      quote: "Action will remove the doubts that theory cannot solve.",
     person: "Tehyi Hsieh"
    },
    {
      quote: "Don't miss all the beautiful colors of the rainbow looking for that pot of gold.",
     person: null
    },
    {
      quote: "Your big opportunity may be right where you are now.",
     person: "Napoleon Hill"
    },
    {
      quote: "People who say it cannot be done should not interrupt those who are doing it.",
     person: "Chinese proverb"
    },
    {
      quote: "The day you decide to do it is your lucky day.",
     person: "Japanese proverb"
    },
    {
      quote: "We must not say every mistake is a foolish one.",
     person: "Cicero"
    },
    {
      quote: "Accept challenges, so that you may feel the exhilaration of victory.",
     person: "George Patton"
    },
    {
      quote: "It is better to understand a little than to misunderstand a lot.",
     person: "Anatole France"
    },
    {
      quote: "You don't drown by falling in water. You drown by staying there.",
     person: null
    },
    {
      quote: "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic.",
     person: null
    },
    {
      quote: "Correction does much, but encouragement does more.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Know, first, who you are, and then adorn yourself accordingly.",
     person: "Epictetus"
    },
    {
      quote: "The biggest adventure you can ever take is to live the life of your dreams.",
     person: "Oprah Winfrey"
    },
    {
      quote: "Life is 10% what happens to you and 90% how you react to it.",
     person: "Charles Swindoll"
    },
    {
      quote: "To want to be what one can be is purpose in life.",
     person: "Cynthia Ozick"
    },
    {
      quote: "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
     person: "Dalai Lama"
    },
    {
      quote: "History will be kind to me for I intend to write it.",
     person: "Winston Churchill"
    },
    {
      quote: "Our lives are a sum total of the choices we have made.",
     person: "Wayne Dyer"
    },
    {
      quote: "Time stays long enough for anyone who will use it.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "You must welcome change as the rule but not as your ruler.",
     person: "Denis Waitley"
    },
    {
      quote: "Give whatever you are doing and whoever you are with the gift of your attention.",
     person: "Jim Rohn"
    },
    {
      quote: "Always be smarter than the people who hire you.",
     person: "Lena Horne"
    },
    {
      quote: "Formula for success: under promise and over deliver.",
     person: "Tom Peters"
    },
    {
      quote: "The eye sees only what the mind is prepared to comprehend.",
     person: "Henri Bergson"
    },
    {
      quote: "People seldom notice old clothes if you wear a big smile.",
     person: "Lee Mildon"
    },
    {
      quote: "The more light you allow within you, the brighter the world you live in will be.",
     person: "Shakti Gawain"
    },
    {
      quote: "Nothing diminishes anxiety faster than action.",
     person: "Walter Anderson"
    },
    {
      quote: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
     person: "Andre Gide"
    },
    {
      quote: "Everything that irritates us about others can lead us to an understanding about ourselves.",
     person: "Carl Jung"
    },
    {
      quote: "Can you imagine what I would do if I could do all I can?",
     person: "Sun Tzu"
    },
    {
      quote: "Ignorance never settle a question.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "The awareness of our own strength makes us modest.",
     person: "Paul Cezanne"
    },
    {
      quote: "They must often change, who would be constant in happiness or wisdom.",
     person: "Confucius"
    },
    {
      quote: "There are no failures. Just experiences and your reactions to them.",
     person: "Tom Krause"
    },
    {
      quote: "Your future depends on many things, but mostly on you.",
     person: "Frank Tyger"
    },
    {
      quote: "Fear grows in darkness; if you think theres a bogeyman around, turn on the light.",
     person: "Dorothy Thompson"
    },
    {
      quote: "The most important point is to accept yourself and stand on your two feet.",
     person: "Shunryu Suzuki"
    },
    {
      quote: "Do not expect the world to look bright, if you habitually wear gray-brown glasses.",
     person: "Tomas Eliot"
    },
    {
      quote: "As long as your going to be thinking anyway, think big.",
     person: "Donald Trump"
    },
    {
      quote: "Without some goals and some efforts to reach it, no man can live.",
     person: "John Dewey"
    },
    {
      quote: "He who obtains has little. He who scatters has much.",
     person: "Richard Braunstein"
    },
    {
      quote: "Myths which are believed in tend to become true.",
     person: "George Orwell"
    },
    {
      quote: "The foot feels the foot when it feels the ground.",
     person: "Buddha"
    },
    {
      quote: "Not what we have but what we enjoy constitutes our abundance.",
     person: "John Petit-Senn"
    },
    {
      quote: "It is never too late to be what you might have been.",
     person: "George Eliot"
    },
    {
      quote: "The beginning is always today.",
     person: "Mary Wollstonecraft"
    },
    {
      quote: "In the long run we get no more than we have been willing to risk giving.",
     person: "Sheldon Kopp"
    },
    {
      quote: "Self-trust is the first secret of success.",
     person: "Ralph Emerson"
    },
    {
      quote: "Don't look back. Something might be gaining on you.",
     person: "Satchel Paige"
    },
    {
      quote: "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.",
     person: "Marcus Aurelius"
    },
    {
      quote: "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
     person: "George Bernard Shaw"
    },
    {
      quote: "Men are disturbed not by things, but by the view which they take of them.",
     person: "Epictetus"
    },
    {
      quote: "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.",
     person: "Blaise Pascal"
    },
    {
      quote: "Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it.",
     person: "Mark Twain"
    },
    {
      quote: "A smile is a light in the window of your face to show your heart is at home.",
     person: null
    },
    {
      quote: "Look forward to spring as a time when you can start to see what nature has to offer once again.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses.",
     person: "Billy Wilder"
    },
    {
      quote: "The least movement is of importance to all nature. The entire ocean is affected by a pebble.",
     person: "Blaise Pascal"
    },
    {
      quote: "I am always doing that which I can not do, in order that I may learn how to do it.",
     person: "Pablo Picasso"
    },
    {
      quote: "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
     person: "Niccolo Machiavelli"
    },
    {
      quote: "You may only be someone in the world, but to someone else, you may be the world.",
     person: null
    },
    {
      quote: "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
     person: "Henry Ward Beecher"
    },
    {
      quote: "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase.",
     person: "James Faust"
    },
    {
      quote: "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
     person: "Denis Waitley"
    },
    {
      quote: "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
     person: "Hasidic saying"
    },
    {
      quote: "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness.",
     person: "Joseph Campbell"
    },
    {
      quote: "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
     person: "Peter Drucker"
    },
    {
      quote: "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
     person: "Bernice Reagon"
    },
    {
      quote: "There is one thing you have got to learn about our movement. Three people are better than no people.",
     person: "Fannie Hamer"
    },
    {
      quote: "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
     person: "Ralph Waldo Emerson"
    },
    {
      quote: "It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes.",
     person: "Byron Roberts"
    },
    {
      quote: "The amount of happiness that you have depends on the amount of freedom you have in your heart.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.",
     person: "Carl Jung"
    },
    {
      quote: "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present.",
     person: "Babatunde Olatunji"
    },
    {
      quote: "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
     person: "Tony Robbins"
    },
    {
      quote: "Sometimes it is better to lose and do the right thing than to win and do the wrong thing.",
     person: "Tony Blair"
    },
    {
      quote: "Let us always meet each other with smile, for the smile is the beginning of love.",
     person: "Mother Teresa"
    },
    {
      quote: "A bend in the road is not the end of the road...unless you fail to make the turn.",
     person: null
    },
    {
      quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
     person: "Aristotle"
    },
    {
      quote: "Living at risk is jumping off the cliff and building your wings on the way down.",
     person: "Ray Bradbury"
    },
    {
      quote: "In the depth of winter, I finally learned that there was within me an invincible summer.",
     person: "Albert Camus"
    },
    {
      quote: "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike.",
     person: "Madame de Stael"
    },
    {
      quote: "A failure is a man who has blundered but is not capable of cashing in on the experience.",
     person: "Elbert Hubbard"
    },
    {
      quote: "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
     person: "Herbert Swope"
    },
    {
      quote: "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever.",
     person: null
    },
    {
      quote: "The power of intuitive understanding will protect you from harm until the end of your days.",
     person: "Laozi"
    },
    {
      quote: "The best thing about the future is that it only comes one day at a time.",
     person: "Abraham Lincoln"
    },
    {
      quote: "We have two ears and one mouth so that we can listen twice as much as we speak.",
     person: "Epictetus"
    },
    {
      quote: "Fear of failure is one attitude that will keep you at the same point in your life.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Friends are those rare people who ask how we are and then wait to hear the answer.",
     person: "Ed Cunningham"
    },
    {
      quote: "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
     person: "Pema Chodron"
    },
    {
      quote: "People grow through experience if they meet life honestly and courageously. This is how character is built.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
     person: "Ralph Waldo Emerson"
    },
    {
      quote: "While we try to teach our children all about life, our children teach us what life is all about.",
     person: "Angela Schwindt"
    },
    {
      quote: "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
     person: "Wayne Dyer"
    },
    {
      quote: "The Creator has not given you a longing to do that which you have no ability to do.",
     person: "Orison Marden"
    },
    {
      quote: "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
     person: "Sam Levenson"
    },
    {
      quote: "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
     person: "Dalai Lama"
    },
    {
      quote: "Until you make peace with who you are, you will never be content with what you have.",
     person: "Doris Mortman"
    },
    {
      quote: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
     person: "Buddha"
    },
    {
      quote: "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
     person: "Henry Miller"
    },
    {
      quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
     person: "Mohandas Gandhi"
    },
    {
      quote: "The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one's inner strength",
     person: "Dalai Lama"
    },
    {
      quote: "Courage is the discovery that you may not win, and trying when you know you can lose.",
     person: null
    },
    {
      quote: "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture.",
     person: "Byron Pulsifer"
    },
    {
      quote: "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
     person: "Mortimer Adler"
    },
    {
      quote: "When you realize how perfect everything is you will tilt your head back and laugh at the sky.",
     person: "Buddha"
    },
    {
      quote: "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
     person: "Mary Kay Ash"
    },
    {
      quote: "It is surprising what a man can do when he has to, and how little most men will do when they don't have to.",
     person: "Walter Linn"
    },
    {
      quote: "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
     person: "Tenzin Gyatso"
    },
    {
      quote: "Nobody made a greater mistake than he who did nothing because he could do only a little.",
     person: "Edmund Burke"
    },
    {
      quote: "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
     person: "Albert Schweitzer"
    },
    {
      quote: "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
     person: "Rene Descartes"
    },
    {
      quote: "A man should look for what is, and not for what he thinks should be.",
     person: "Albert Einstein"
    },
    {
      quote: "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
     person: "William Channing"
    },
    {
      quote: "If you have no respect for your own values how can you be worthy of respect from others.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses.",
     person: "Alphonse Karr"
    },
    {
      quote: "To choose what is difficult all ones days, as if it were easy, that is faith.",
     person: "W. H. Auden"
    },
    {
      quote: "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it.",
     person: "Lou Holtz"
    },
    {
      quote: "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education.",
     person: "Thomas Carlyle"
    },
    {
      quote: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
     person: "Buddha"
    },
    {
      quote: "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing.",
     person: "Michel de Montaigne"
    },
    {
      quote: "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.",
     person: "Margaret Laurence"
    },
    {
      quote: "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace.",
     person: "Ajahn Chah"
    },
    {
      quote: "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness.",
     person: "Dalai Lama"
    },
    {
      quote: "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur.",
     person: "Vincent Lombardi"
    },
    {
      quote: "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
     person: "Jean-Paul Sartre"
    },
    {
      quote: "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
     person: "Richard Bach"
    },
    {
      quote: "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime.",
     person: "Elisabeth Kubler-Ross"
    },
    {
      quote: "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality.",
     person: "Byron Pulsifer"
    },
    {
      quote: "To understand the heart and mind of a  person, look not at what he has already achieved, but at what he aspires to do.",
     person: "Kahlil Gibran"
    },
    {
      quote: "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can.",
     person: "Bernard Shaw"
    },
    {
      quote: "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.",
     person: "Albert Einstein"
    },
    {
      quote: "When you see a good  person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
     person: "Confucius"
    },
    {
      quote: "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others.",
     person: "Anne Lindbergh"
    },
    {
      quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
     person: "Dale Carnegie"
    },
    {
      quote: "You may say I'm a dreamer, but I'm not the only one, I hope someday you will join us, and the world will live as one.",
     person: "John Lennon"
    },
    {
      quote: "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you.",
     person: "Nathaniel Hawthorne"
    },
    {
      quote: "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye.",
     person: "Buddha"
    },
    {
      quote: "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
     person: "Buddha"
    },
    {
      quote: "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.",
     person: "Caroline Myss"
    },
    {
      quote: "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
     person: "Winston Churchill"
    },
    {
      quote: "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be.",
     person: "William James"
    },
    {
      quote: "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.",
     person: "Henry David Thoreau"
    },
    {
      quote: "The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it.",
     person: "Pearl Buck"
    },
    {
      quote: "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self.",
     person: "Confucius"
    },
    {
      quote: "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre.",
     person: "Uta Hagen"
    },
    {
      quote: "Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them.",
     person: "Orison Marden"
    },
    {
      quote: "Everything can be taken from a man but ... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way.",
     person: "Victor Frankl"
    },
    {
      quote: "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.",
     person: "Edward de Bono"
    },
    {
      quote: "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing.",
     person: "Abraham Lincoln"
    },
    {
      quote: "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
     person: "Lao Tzu"
    },
    {
      quote: "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.",
     person: "Amy Tan"
    },
    {
      quote: "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort.",
     person: "Epictetus"
    },
    {
      quote: "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.",
     person: "Stephen Covey"
    },
    {
      quote: "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent.",
     person: "Paul Graham"
    },
    {
      quote: "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
     person: "Buddha"
    },
    {
      quote: "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do.",
     person: "Chuck Norris"
    },
    {
      quote: "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
     person: "Amiel"
    },
    {
      quote: "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle.",
     person: "Amy Bloom"
    },
    {
      quote: "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.",
     person: "Keshavan Nair"
    },
    {
      quote: "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
     person: "Margaret Smith"
    },
    {
      quote: "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
     person: "Frederick Douglass"
    },
    {
      quote: "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
     person: "Helen Keller"
    },
    {
      quote: "When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
     person: "Helen Keller"
    },
    {
      quote: "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always.",
     person: "Oprah Winfrey"
    },
    {
      quote: "You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide.",
     person: "Ingrid Bergman"
    },
    {
      quote: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
     person: "John Kennedy"
    },
    {
      quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
     person: "Marie Curie"
    },
    {
      quote: "Parents can only give good advice or put them on the right paths, but the final forming of a  persons character lies in their own hands.",
     person: "Anne Frank"
    },
    {
      quote: "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance.",
     person: "Byron Pulsifer"
    },
    {
      quote: "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
     person: "Robert Fulghum"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
     person: "Albert Schweitzer"
    },
    {
      quote: "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
     person: "Albert Einstein"
    },
    {
      quote: "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate that's my philosophy.",
     person: "Thornton Wilder"
    },
    {
      quote: "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
     person: "John Dewey"
    },
    {
      quote: "He who conquers others is strong; He who conquers himself is mighty.",
     person: "Lao Tzu"
    },
    {
      quote: "Anything you really want, you can attain, if you really go after it.",
     person: "Wayne Dyer"
    },
    {
      quote: "Arriving at one point is the starting point to another.",
     person: "John Dewey"
    },
    {
      quote: "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
     person: "James Oppenheim"
    },
    {
      quote: "The greatest part of our happiness depends on our dispositions, not our circumstances.",
     person: "Martha Washington"
    },
    {
      quote: "It is only possible to live happily ever after on a day to day basis.",
     person: "Margaret Bonnano"
    },
    {
      quote: "A man sees in the world what he carries in his heart.",
     person: "Goethe"
    },
    {
      quote: "Action may not always bring happiness, but there is no happiness without action.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "Believe deep down in your heart that you're destined to do great things.",
     person: "Joe Paterno"
    },
    {
      quote: "Sooner or later, those who win are those who think they can.",
     person: "Richard Bach"
    },
    {
      quote: "The only limit to your impact is your imagination and commitment.",
     person: "Tony Robbins"
    },
    {
      quote: "You are special, you are unique, you are the best!",
     person: "Cathy Pulsifer"
    },
    {
      quote: "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
     person: "William Arthur Ward"
    },
    {
      quote: "To know oneself is to study oneself in action with another  person.",
     person: "Bruce Lee"
    },
    {
      quote: "We must not allow ourselves to become like the system we oppose.",
     person: "Bishop Desmond Tutu"
    },
    {
      quote: "Smile, breathe and go slowly.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "Reality is merely an illusion, albeit a very persistent one.",
     person: "Albert Einstein"
    },
    {
      quote: "When you come to the end of your rope, tie a knot and hang on.",
     person: "Franklin Roosevelt"
    },
    {
      quote: "Always be mindful of the kindness and not the faults of others.",
     person: "Buddha"
    },
    {
      quote: "Everything that irritates us about others can lead us to an understanding of ourselves.",
     person: "Carl Jung"
    },
    {
      quote: "When fate hands us a lemon, lets try to make lemonade.",
     person: "Dale Carnegie"
    },
    {
      quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
     person: "Mohandas Gandhi"
    },
    {
      quote: "A man is great by deeds, not by birth.",
     person: "Chanakya"
    },
    {
      quote: "Success is getting what you want. Happiness is wanting what you get.",
     person: "Dale Carnegie"
    },
    {
      quote: "Truth isn't all about what actually happens but more about how what has happened is interpreted.",
     person: "Byron Pulsifer"
    },
    {
      quote: "A good rest is half the work.",
     person: null
    },
    {
      quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
     person: "Robert Stevenson"
    },
    {
      quote: "Small opportunities are often the beginning of great enterprises.",
     person: "Demosthenes"
    },
    {
      quote: "To be tested is good. The challenged life may be the best therapist.",
     person: "Gail Sheehy"
    },
    {
      quote: "Take heed: you do not find what you do not seek.",
     person: "English proverb"
    },
    {
      quote: "Happiness is the reward we get for living to the highest right we know.",
     person: "Richard Bach"
    },
    {
      quote: "Be slow of tongue and quick of eye.",
     person: "Cervantes"
    },
    {
      quote: "Freedom is not worth having if it does not connote freedom to err.",
     person: "Mohandas Gandhi"
    },
    {
      quote: "I have always thought the actions of men the best interpreters of their thoughts.",
     person: "John Locke"
    },
    {
      quote: "He who obtains has little. He who scatters has much.",
     person: "Lao Tzu"
    },
    {
      quote: "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
     person: "Soren Kierkegaard"
    },
    {
      quote: "No day in which you learn something is a complete loss.",
     person: "David Eddings"
    },
    {
      quote: "Peace cannot be kept by force. It can only be achieved by understanding.",
     person: "Albert Einstein"
    },
    {
      quote: "Real success is finding your lifework in the work that you love.",
     person: "David McCullough"
    },
    {
      quote: "Better than a thousand hollow words, is one word that brings peace.",
     person: "Buddha"
    },
    {
      quote: "All the flowers of all the tomorrows are in the seeds of today.",
     person: null
    },
    {
      quote: "Your sacred space is where you can find yourself again and again.",
     person: "Joseph Campbell"
    },
    {
      quote: "As you think, so shall you become.",
     person: "Bruce Lee"
    },
    {
      quote: "In seed time learn, in harvest teach, in winter enjoy.",
     person: "William Blake"
    },
    {
      quote: "Happiness does not come from having much, but from being attached to little.",
     person: "Cheng Yen"
    },
    {
      quote: "Every gift from a friend is a wish for your happiness.",
     person: "Richard Bach"
    },
    {
      quote: "Go put your creed into the deed. Nor speak with double tongue.",
     person: "Ralph Emerson"
    },
    {
      quote: "The wisest men follow their own direction.",
     person: "Euripides"
    },
    {
      quote: "Hope arouses, as nothing else can arouse, a passion for the possible.",
     person: "William Sloane Coffin"
    },
    {
      quote: "Everything has beauty, but not everyone sees it.",
     person: "Confucius"
    },
    {
      quote: "Nothing ever goes away until it has taught us what we need to know.",
     person: "Pema Chodron"
    },
    {
      quote: "When you learn, teach. When you get, give.",
     person: "Maya Angelou"
    },
    {
      quote: "Only when we are no longer afraid do we begin to live.",
     person: "Dorothy Thompson"
    },
    {
      quote: "If you smile when no one else is around, you really mean it.",
     person: "Andy Rooney"
    },
    {
      quote: "Love is the only force capable of transforming an enemy into friend.",
     person: "Martin Luther King, Jr."
    },
    {
      quote: "In all chaos there is a cosmos, in all disorder a secret order.",
     person: "Carl Jung"
    },
    {
      quote: "A man is not where he lives but where he loves.",
     person: null
    },
    {
      quote: "The price of greatness is responsibility.",
     person: "Winston Churchill"
    },
    {
      quote: "Decision is a risk rooted in the courage of being free.",
     person: "Paul Tillich"
    },
    {
      quote: "Your mind will answer most questions if you learn to relax and wait for the answer.",
     person: "William Burroughs"
    },
    {
      quote: "The world does not happen to you it happens from you.",
     person: null
    },
    {
      quote: "We cannot solve our problems with the same thinking we used when we created them.",
     person: "Albert Einstein"
    },
    {
      quote: "More powerful than the will to win is the courage to begin.",
     person: null
    },
    {
      quote: "Learning is finding out what you already know.",
     person: "Richard Bach"
    },
    {
      quote: "Saying thank you is more than good manners. It is good spirituality.",
     person: "Alfred Painter"
    },
    {
      quote: "Silence is a source of great strength.",
     person: "Lao Tzu"
    },
    {
      quote: "Joy is the best makeup.",
     person: "Anne Lamott"
    },
    {
      quote: "There is no great genius without some touch of madness.",
     person: "Seneca"
    },
    {
      quote: "A jug fills drop by drop.",
     person: "Buddha"
    },
    {
      quote: "Until you make peace with who you are, you'll never be content with what you have.",
     person: "Doris Mortman"
    },
    {
      quote: "We aim above the mark to hit the mark.",
     person: "Ralph Emerson"
    },
    {
      quote: "Being angry never solves anything.",
     person: "Catherine Pulsifer"
    },
    {
      quote: "All men who have achieved great things have been great dreamers.",
     person: "Orison Marden"
    },
    {
      quote: "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
     person: "Arthur Conan Doyle"
    },
    {
      quote: "Where all think alike, no one thinks very much.",
     person: "Walter Lippmann"
    },
    {
      quote: "Everything that exists is in a manner the seed of that which will be.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Be less curious about people and more curious about ideas.",
     person: "Marie Curie"
    },
    {
      quote: "The heart has eyes which the brain knows nothing of.",
     person: "Charles Perkhurst"
    },
    {
      quote: "Only those who dare to fail greatly can ever achieve greatly.",
     person: "Robert Kennedy"
    },
    {
      quote: "Lose an hour in the morning, and you will spend all day looking for it.",
     person: "Richard Whately"
    },
    {
      quote: "Mistakes are always forgivable, if one has the courage to admit them.",
     person: "Bruce Lee"
    },
    {
      quote: "Go to your bosom: Knock there, and ask your heart what it doth know.",
     person: "William Shakespeare"
    },
    {
      quote: "Happiness mainly comes from our own attitude, rather than from external factors.",
     person: "Dalai Lama"
    },
    {
      quote: "If you do not change direction, you may end up where you are heading.",
     person: "Lao Tzu"
    },
    {
      quote: "What we see is mainly what we look for.",
     person: null
    },
    {
      quote: "Stay away from what might have been and look at what will be.",
     person: "Marsha Petrie Sue"
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
     person: "William James"
    },
    {
      quote: "Passion creates the desire for more and action fuelled by passion creates a future.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Do good by stealth, and blush to find it fame.",
     person: "Alexander Pope"
    },
    {
      quote: "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
     person: "Napoleon Hill"
    },
    {
      quote: "Don't talk about what you have done or what you are going to do.",
     person: "Thomas Jefferson"
    },
    {
      quote: "Most powerful is he who has himself in his own power.",
     person: "Seneca"
    },
    {
      quote: "We don't stop playing because we grow old; we grow old because we stop playing.",
     person: "Bernard Shaw"
    },
    {
      quote: "Experience can only be gained by doing not by thinking or dreaming.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Always tell the truth. That way, you don't have to remember what you said.",
     person: "Mark Twain"
    },
    {
      quote: "From wonder into wonder existence opens.",
     person: "Lao Tzu"
    },
    {
      quote: "He who fears being conquered is sure of defeat.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "Life is what happens while you are making other plans.",
     person: "John Lennon"
    },
    {
      quote: "Doing what you love is the cornerstone of having abundance in your life.",
     person: "Wayne Dyer"
    },
    {
      quote: "Kindness is the golden chain by which society is bound together.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "You need chaos in your soul to give birth to a dancing star.",
     person: "Nietzsche"
    },
    {
      quote: "It can't be spring if your heart is filled with past failures.",
     person: "Byron Pulsifer"
    },
    {
      quote: "No yesterdays are ever wasted for those who give themselves to today.",
     person: "Brendan Francis"
    },
    {
      quote: "There are no failures just experiences and your reactions to them.",
     person: "Tom Krause"
    },
    {
      quote: "Action is the foundational key to all success.",
     person: "Pablo Picasso"
    },
    {
      quote: "What is necessary to change a  person is to change his awareness of himself.",
     person: "Abraham Maslow"
    },
    {
      quote: "Positive thinking will let you do everything better than negative thinking will.",
     person: "Zig Ziglar"
    },
    {
      quote: "We shall never know all the good that a simple smile can do.",
     person: "Mother Teresa"
    },
    {
      quote: "Nothing is so strong as gentleness. Nothing is so gentle as real strength.",
     person: "Frances de Sales"
    },
    {
      quote: "Imagination is not a talent of some men but is the health of every man.",
     person: "Ralph Waldo Emerson"
    },
    {
      quote: "We must embrace pain and burn it as fuel for our journey.",
     person: "Kenji Miyazawa"
    },
    {
      quote: "Don't wait for people to be friendly. Show them how.",
     person: null
    },
    {
      quote: "A gem cannot be polished without friction, nor a man perfected without trials.",
     person: "Chinese proverb"
    },
    {
      quote: "Each day can be one of triumph if you keep up your interests.",
     person: "George Matthew Adams"
    },
    {
      quote: "The place to improve the world is first in one's own heart and head and hands.",
     person: "Robert M. Pirsig"
    },
    {
      quote: "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
     person: "Winston Churchill"
    },
    {
      quote: "Winners have simply formed the habit of doing things losers don't like to do.",
     person: "Albert Gray"
    },
    {
      quote: "Nature is a mutable cloud which is always and never the same.",
     person: "Ralph Emerson"
    },
    {
      quote: "Life is what you make of it. Always has been, always will be.",
     person: "Grandma Moses"
    },
    {
      quote: "Worry often gives a small thing a big shadow.",
     person: "Swedish proverb"
    },
    {
      quote: "I want you to be everything that's you, deep at the center of your being.",
     person: "Confucius"
    },
    {
      quote: "We know what we are, but know not what we may be.",
     person: "William Shakespeare"
    },
    {
      quote: "Freedom is what you do with what's been done to you.",
     person: "Jean-Paul Sartre"
    },
    {
      quote: "The truth which has made us free will in the end make us glad also.",
     person: "Felix Adler"
    },
    {
      quote: "He who has imagination without learning has wings but no feet.",
     person: "Joseph Joubert"
    },
    {
      quote: "Whoso loves, believes the impossible.",
     person: "Elizabeth Browning"
    },
    {
      quote: "It isn't where you come from, it's where you're going that counts.",
     person: "Ella Fitzgerald"
    },
    {
      quote: "The greatest obstacle to connecting with our joy is resentment.",
     person: "Pema Chodron"
    },
    {
      quote: "When anger use your energy to do something productive.",
     person: "C. Pulsifer"
    },
    {
      quote: "We are all something, but none of us are everything.",
     person: "Blaise Pascal"
    },
    {
      quote: "If you can't explain it simply, you don't understand it well enough.",
     person: "Albert Einstein"
    },
    {
      quote: "He who lives in harmony with himself lives in harmony with the world.",
     person: "Marcus Aurelius"
    },
    {
      quote: "He who knows himself is enlightened.",
     person: "Lao Tzu"
    },
    {
      quote: "Build a better mousetrap and the world will beat a path to your door.",
     person: "Ralph Emerson"
    },
    {
      quote: "As our case is new, we must think and act anew.",
     person: "Abraham Lincoln"
    },
    {
      quote: "If you can't feed a hundred people, then feed just one.",
     person: "Mother Teresa"
    },
    {
      quote: "In three words I can sum up everything Ive learned about life: it goes on.",
     person: "Robert Frost"
    },
    {
      quote: "Don't let today's disappointments cast a shadow on tomorrow's dreams.",
     person: null
    },
    {
      quote: "You always succeed in producing a result.",
     person: "Tony Robbins"
    },
    {
      quote: "Everything you are against weakens you. Everything you are for empowers you.",
     person: "Wayne Dyer"
    },
    {
      quote: "As we risk ourselves, we grow. Each new experience is a risk.",
     person: "Fran Watson"
    },
    {
      quote: "Who we are never changes. Who we think we are does.",
     person: "Mary Almanac"
    },
    {
      quote: "The final proof of greatness lies in being able to endure criticism without resentment.",
     person: "Elbert Hubbard"
    },
    {
      quote: "An invasion of armies can be resisted, but not an idea whose time has come.",
     person: "Victor Hugo"
    },
    {
      quote: "Never let lack of money interfere with having fun.",
     person: null
    },
    {
      quote: "Excellence is not a skill. It is an attitude.",
     person: "Ralph Marston"
    },
    {
      quote: "People may doubt what you say, but they will believe what you do.",
     person: "Lewis Cass"
    },
    {
      quote: "The most formidable weapon against errors of every kind is reason.",
     person: "Thomas Paine"
    },
    {
      quote: "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
     person: "Danilo Dolci"
    },
    {
      quote: "Beware of missing chances; otherwise it may be altogether too late some day.",
     person: "Franz Liszt"
    },
    {
      quote: "You only lose what you cling to.",
     person: "Buddha"
    },
    {
      quote: "Life is a succession of moments. To live each one is to succeed.",
     person: "Corita Kent"
    },
    {
      quote: "Most of the shadows of life are caused by standing in our own sunshine.",
     person: "Ralph Waldo Emerson"
    },
    {
      quote: "Good actions give strength to ourselves and inspire good actions in others.",
     person: "Plato"
    },
    {
      quote: "I know but one freedom and that is the freedom of the mind.",
     person: "Antoine de Saint-Exupery"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
     person: "Albert Einstein"
    },
    {
      quote: "Every human being is the  person of his own health or disease.",
     person: "Buddha"
    },
    {
      quote: "When in doubt, tell the truth.",
     person: "Mark Twain"
    },
    {
      quote: "Every great advance in science has issued from a new audacity of the imagination.",
     person: "John Dewey"
    },
    {
      quote: "The path to success is to take massive, determined action.",
     person: "Anthony Robbins"
    },
    {
      quote: "The ladder of success is never crowded at the top.",
     person: "Napoleon Hill"
    },
    {
      quote: "He who has health has hope, and he who has hope has everything.",
     person: null
    },
    {
      quote: "All great achievements require time.",
     person: "Maya Angelou"
    },
    {
      quote: "No  person is your friend who demands your silence, or denies your right to grow.",
     person: "Alice Walker"
    },
    {
      quote: "Impossibilities are merely things which we have not yet learned.",
     person: "Charles Chesnutt"
    },
    {
      quote: "Vision without action is a daydream. Action without vision is a nightmare.",
     person: "Japanese proverb"
    },
    {
      quote: "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
     person: "Confucius"
    },
    {
      quote: "He who angers you conquers you.",
     person: "Elizabeth Kenny"
    },
    {
      quote: "I never worry about action, but only inaction.",
     person: "Winston Churchill"
    },
    {
      quote: "No man is free who is not master of himself.",
     person: "Epictetus"
    },
    {
      quote: "Those that know, do. Those that understand, teach.",
     person: "Aristotle"
    },
    {
      quote: "If we are not fully ourselves, truly in the present moment, we miss everything.",
     person: "Thich Nhat Hanh"
    },
    {
      quote: "No act of kindness, no matter how small, is ever wasted.",
     person: "Aesop"
    },
    {
      quote: "Every man is a volume if you know how to read him.",
     person: "Channing"
    },
    {
      quote: "The difficulties of life are intended to make us better, not bitter.",
     person: null
    },
    {
      quote: "Quality means doing it right when no one is looking.",
     person: "Henry Ford"
    },
    {
      quote: "Change your words. Change your world.",
     person: null
    },
    {
      quote: "Great acts are made up of small deeds.",
     person: "Lao Tzu"
    },
    {
      quote: "The odds of hitting your target go up dramatically when you aim at it.",
     person: "Mal Pancoast"
    },
    {
      quote: "Open minds lead to open doors.",
     person: null
    },
    {
      quote: "They can do all because they think they can.",
     person: "Virgil"
    },
    {
      quote: "You have to think anyway, so why not think big?",
     person: "Donald Trump"
    },
    {
      quote: "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows.",
     person: "Edward Young"
    },
    {
      quote: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
     person: "Buddha"
    },
    {
      quote: "The one who always loses, is the only  person who gets the reward.",
     person: "Claire Charmont"
    },
    {
      quote: "The future is completely open, and we are writing it moment to moment.",
     person: "Pema Chodron"
    },
    {
      quote: "Each time we face a fear, we gain strength, courage, and confidence in the doing.",
     person: null
    },
    {
      quote: "Ask yourself the secret of your success. Listen to your answer, and practice it.",
     person: "Richard Bach"
    },
    {
      quote: "Don't frown because you never know who is falling in love with your smile.",
     person: "Sinvyest Tan"
    },
    {
      quote: "Trust your hunches. They're usually based on facts filed away just below the conscious level.",
     person: "Joyce Brothers"
    },
    {
      quote: "Nothing is at last sacred but the integrity of your own mind.",
     person: "Ralph Emerson"
    },
    {
      quote: "Listen to your intuition. It will tell you everything you need to know.",
     person: "Anthony D'Angelo"
    },
    {
      quote: "The  personal life deeply lived always expands into truths beyond itself.",
     person: "Anais Nin"
    },
    {
      quote: "Whenever something negative happens to you, there is a deep lesson concealed within it.",
     person: "Eckhart Tolle"
    },
    {
      quote: "What is not started today is never finished tomorrow.",
     person: "Goethe"
    },
    {
      quote: "Our kindness may be the most persuasive argument for that which we believe.",
     person: "Gordon Hinckley"
    },
    {
      quote: "Chaos is inherent in all compounded things. Strive on with diligence.",
     person: "Buddha"
    },
    {
      quote: "Be sure you put your feet in the right place, then stand firm.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Nothing great was ever achieved without enthusiasm.",
     person: "Ralph Emerson"
    },
    {
      quote: "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
     person: "Richard Bach"
    },
    {
      quote: "Know how to listen, and you will profit even from those who talk badly.",
     person: "Plutarch"
    },
    {
      quote: "A man is not old as long as he is seeking something.",
     person: "Edmond Rostand"
    },
    {
      quote: "The time you think you're missing, misses you too.",
     person: "Ymber Delecto"
    },
    {
      quote: "Life is not measured by the breaths you take, but by its breathtaking moments.",
     person: "Michael Vance"
    },
    {
      quote: "Much wisdom often goes with fewer words.",
     person: "Sophocles"
    },
    {
      quote: "If you love life, don't waste time, for time is what life is made up of.",
     person: "Bruce Lee"
    },
    {
      quote: "Imagination is the living power and prime agent of all human perception.",
     person: "Samuel Taylor Coleridge"
    },
    {
      quote: "It is impossible to feel grateful and depressed in the same moment.",
     person: "Naomi Williams"
    },
    {
      quote: "Progress always involves risks. You can't steal second base and keep your foot on first.",
     person: "Frederick Wilcox"
    },
    {
      quote: "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
     person: "Simone Weil"
    },
    {
      quote: "A thing well said will be wit in all languages.",
     person: "John Dryden"
    },
    {
      quote: "Always do your best. What you plant now, you will harvest later.",
     person: "Og Mandino"
    },
    {
      quote: "My mama always said: life's like a box of chocolate you never know what you gonna get.",
     person: "Forrest Gump"
    },
    {
      quote: "We are the leaves of one branch, the drops of one sea, the flowers of one garden.",
     person: "Jean Lacordaire"
    },
    {
      quote: "If you come to a fork in the road, take it.",
     person: null
    },
    {
      quote: "It is not only for what we do that we are held responsible, but also for what we do not do.",
     person: "Moliere"
    },
    {
      quote: "Nobody can do everything, but everybody can do something.",
     person: null
    },
    {
      quote: "The world has the habit of making room for the man whose actions show that he knows where he is going.",
     person: "Napoleon Hill"
    },
    {
      quote: "You cannot step twice into the same river, for other waters are continually flowing in.",
     person: "Heraclitus"
    },
    {
      quote: "Excellence is to do a common thing in an uncommon way.",
     person: "Booker Washington"
    },
    {
      quote: "No matter how hard the past, you can always begin again.",
     person: "Buddha"
    },
    {
      quote: "I begin with an idea and then it becomes something else.",
     person: "Pablo Picasso"
    },
    {
      quote: "Whoever is happy will make others happy, too.",
     person: "Mark Twain"
    },
    {
      quote: "Your work is to discover your work and then with all your heart to give yourself to it.",
     person: "Buddha"
    },
    {
      quote: "It's not what happens to you, but how you react to it that matters.",
     person: "Epictetus"
    },
    {
      quote: "Take it easy, but take it.",
     person: "Woody Guthrie"
    },
    {
      quote: "Never apologize for showing feeling. When you do so, you apologize for truth.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "Take rest; a field that has rested gives a bountiful crop.",
     person: "Ovid"
    },
    {
      quote: "Age does not protect you from love. But love, to some extent, protects you from age.",
     person: "Anais Nin"
    },
    {
      quote: "Do what you can. Want what you have. Be who you are.",
     person: "Forrest Church"
    },
    {
      quote: "There are people who have money and people who are rich.",
     person: "Coco Chanel"
    },
    {
      quote: "Why worry about tomorrow, when today is all we have?",
     person: null
    },
    {
      quote: "Speak when you are angry and you will make the best speech you will ever regret.",
     person: "Ambrose Bierce"
    },
    {
      quote: "Things do not change, we change.",
     person: "Henry Thoreau"
    },
    {
      quote: "The exercise of an extraordinary gift is the supremest pleasure in life.",
     person: "Mark Twain"
    },
    {
      quote: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
     person: "Etty Hillesum"
    },
    {
      quote: "Forgiveness is choosing to love. It is the first skill of self-giving love.",
     person: "Mohandas Gandhi"
    },
    {
      quote: "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.",
     person: "William Londen"
    },
    {
      quote: "Most smiles are started by another smile.",
     person: null
    },
    {
      quote: "Nothing is softer or more flexible than water, yet nothing can resist it.",
     person: "Lao Tzu"
    },
    {
      quote: "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others.",
     person: "Dalai Lama"
    },
    {
      quote: "Experience keeps a dear school, but fools will learn in no other.",
     person: "Benjamin Franklin"
    },
    {
      quote: "We can only be said to be alive in those moments when our hearts are conscious of our treasures.",
     person: "Thornton Wilder"
    },
    {
      quote: "Fine words and an insinuating appearance are seldom associated with true virtue",
     person: "Confucius"
    },
    {
      quote: "We do not quit playing because we grow old, we grow old because we quit playing.",
     person: "Oliver Holmes"
    },
    {
      quote: "You can't choose up sides on a round world.",
     person: "Wayne Dyer"
    },
    {
      quote: "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate, that's my philosophy.",
     person: "Thornton Wilder"
    },
    {
      quote: "Kindness is the language which the deaf can hear and the blind can see.",
     person: "Mark Twain"
    },
    {
      quote: "I may not know everything, but everything is not known yet anyway.",
     person: "Byron Pulsifer"
    },
    {
      quote: "If we could see the miracle of a single flower clearly, our whole life would change.",
     person: "Buddha"
    },
    {
      quote: "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable.",
     person: "Carl Jung"
    },
    {
      quote: "You cannot travel the path until you have become the path itself.",
     person: "Buddha"
    },
    {
      quote: "Keep your eyes on the stars and your feet on the ground.",
     person: "Theodore Roosevelt"
    },
    {
      quote: "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
     person: "William White"
    },
    {
      quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
     person: "Jamie Paolinetti"
    },
    {
      quote: "When you lose, don't lose the lesson.",
     person: null
    },
    {
      quote: "If you want a thing done well, do it yourself.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "The greatest barrier to success is the fear of failure.",
     person: "Eriksson"
    },
    {
      quote: "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
     person: "John Ruskin"
    },
    {
      quote: "If you aren't going all the way, why go at all?",
     person: "Joe Namath"
    },
    {
      quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
     person: "Confucius"
    },
    {
      quote: "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
     person: "Pierre Abelard"
    },
    {
      quote: "If I could reach up and hold a star for every time you've made me smile, the entire evening sky would be in the palm of my hand.",
     person: null
    },
    {
      quote: "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
     person: "Buddha"
    },
    {
      quote: "Stay committed to your decisions, but stay flexible in your approach.",
     person: "Tony Robbins"
    },
    {
      quote: "An optimist is a  person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise  person is colour-blind.",
     person: "Albert Schweitzer"
    },
    {
      quote: "What separates the winners from the losers is how a  person reacts to each new twist of fate.",
     person: "Donald Trump"
    },
    {
      quote: "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
     person: "Ralph Emerson"
    },
    {
      quote: "To change ones life, start immediately, do it flamboyantly, no exceptions.",
     person: "William James"
    },
    {
      quote: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
     person: "John F. Kennedy"
    },
    {
      quote: "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.",
     person: "Booker Washington"
    },
    {
      quote: "The steeper the mountain the harder the climb the better the view from the finishing line",
     person: null
    },
    {
      quote: "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
     person: "Dr. David M. Burns"
    },
    {
      quote: "When I let go of what I am, I become what I might be.",
     person: "Lao Tzu"
    },
    {
      quote: "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Time is not a measure the length of a day or month or year but more a measure of what you have accomplished.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
     person: "Buddha"
    },
    {
      quote: "When there is no enemy within, the enemies outside cannot hurt you.",
     person: "African proverb"
    },
    {
      quote: "He who controls others may be powerful, but he who has mastered himself is mightier still.",
     person: "Lao Tzu"
    },
    {
      quote: "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen.",
     person: "Wayne Dyer"
    },
    {
      quote: "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
     person: "Wolfgang Amadeus Mozart"
    },
    {
      quote: "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along.",
     person: "H. Bertram Lewis"
    },
    {
      quote: "As an organizer I start from where the world is, as it is, not as I would like it to be.",
     person: "Saul Alinsky"
    },
    {
      quote: "You are the only  person on Earth who can use your ability.",
     person: "Zig Ziglar"
    },
    {
      quote: "Don't let what you can't do stop you from doing what you can do.",
     person: null
    },
    {
      quote: "Complaining doesn't change a thing only taking action does.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter.",
     person: "Charles A. Lindbergh"
    },
    {
      quote: "Enjoy the little things, for one day you may look back and realize they were the big things.",
     person: "Robert Brault"
    },
    {
      quote: "With every experience, you alone are painting your own canvas, thought by thought, choice by choice.",
     person: "Oprah Winfrey"
    },
    {
      quote: "Let the beauty of what you love be what you do.",
     person: "Rumi"
    },
    {
      quote: "The world turns aside to let any man pass who knows where he is going.",
     person: "Epictetus"
    },
    {
      quote: "Beauty is not in the face; beauty is a light in the heart.",
     person: "Kahlil Gibran"
    },
    {
      quote: "A day of worry is more exhausting than a day of work.",
     person: "John Lubbock"
    },
    {
      quote: "Truth, and goodness, and beauty are but different faces of the same all.",
     person: "Ralph Emerson"
    },
    {
      quote: "To be great is to be misunderstood.",
     person: "Ralph Emerson"
    },
    {
      quote: "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
     person: "Alfred Adler"
    },
    {
      quote: "Never, never, never give up.",
     person: "Winston Churchill"
    },
    {
      quote: "The most decisive actions of our life... are most often unconsidered actions.",
     person: "Andre Gide"
    },
    {
      quote: "As we grow as unique  persons, we learn to respect the uniqueness of others.",
     person: "Robert Schuller"
    },
    {
      quote: "Failure doesn't mean you are a failure it just means you haven't succeeded yet.",
     person: "Robert Schuller"
    },
    {
      quote: "It is the quality of our work which will please God, not the quantity.",
     person: "Mahatma Gandhi"
    },
    {
      quote: "Try and fail, but don't fail to try.",
     person: "Stephen Kaggwa"
    },
    {
      quote: "First say to yourself what you would be; and then do what you have to do.",
     person: "Epictetus"
    },
    {
      quote: "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune.",
     person: "Carl Jung"
    },
    {
      quote: "Keep silence for the most part, and speak only when you must, and then briefly.",
     person: "Epictetus"
    },
    {
      quote: "Fear not for the future, weep not for the past.",
     person: "Percy Shelley"
    },
    {
      quote: "We are Divine enough to ask and we are important enough to receive.",
     person: "Wayne Dyer"
    },
    {
      quote: "If you kick a stone in anger, you'll hurt your own foot.",
     person: "Korean proverb"
    },
    {
      quote: "To see things in the seed, that is genius.",
     person: "Lao Tzu"
    },
    {
      quote: "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live.",
     person: "Bertrand Russell"
    },
    {
      quote: "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so.",
     person: "Douglas Adams"
    },
    {
      quote: "Make the most of yourself, for that is all there is of you.",
     person: "Ralph Emerson"
    },
    {
      quote: "The universe is made of stories, not atoms.",
     person: "Muriel Rukeyser"
    },
    {
      quote: "Respect should be earned by actions, and not acquired by years.",
     person: "Frank Wright"
    },
    {
      quote: "I hear and I forget. I see and I remember. I do and I understand.",
     person: "Confucius"
    },
    {
      quote: "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds.",
     person: "Will Durant"
    },
    {
      quote: "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
     person: "Chuck Norris"
    },
    {
      quote: "Sometimes the biggest act of courage is a small one.",
     person: "Lauren Raffo"
    },
    {
      quote: "People are not lazy. They simply have impotent goals that is, goals that do not inspire them.",
     person: "Tony Robbins"
    },
    {
      quote: "You do not become good by trying to be good, but by finding the goodness that is already within you.",
     person: "Eckhart Tolle"
    },
    {
      quote: "Waste no more time arguing about what a good man should be. Be one.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Happiness often sneaks in through a door you didn't know you left open.",
     person: "John Barrymore"
    },
    {
      quote: "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.",
     person: "Mark Twain"
    },
    {
      quote: "The things that one most wants to do are the things that are probably most worth doing.",
     person: "Winifred Holtby"
    },
    {
      quote: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Setting an example is not the main means of influencing another, it is the only means.",
     person: "Albert Einstein"
    },
    {
      quote: "Chaos and Order are not enemies, only opposites.",
     person: "Richard Garriott"
    },
    {
      quote: "Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody.",
     person: "Henry Longfellow"
    },
    {
      quote: "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others.",
     person: "Harriet Lerner"
    },
    {
      quote: "He who deliberates fully before taking a step will spend his entire life on one leg.",
     person: "Chinese proverb"
    },
    {
      quote: "Peace begins with a smile.",
     person: "Mother Teresa"
    },
    {
      quote: "Be your own hero, it's cheaper than a movie ticket.",
     person: "Doug Horton"
    },
    {
      quote: "Turn your face toward the sun and the shadows will fall behind you.",
     person: "Maori proverb"
    },
    {
      quote: "Things turn out best for those who make the best of the way things turn out.",
     person: "Jack Buck"
    },
    {
      quote: "Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.",
     person: "Whoopi Goldberg"
    },
    {
      quote: "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.",
     person: "Anthony Robbins"
    },
    {
      quote: "Ability will never catch up with the demand for it.",
     person: "Confucius"
    },
    {
      quote: "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf.",
     person: "Albert Schweitzer"
    },
    {
      quote: "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself.",
     person: "Henry Reed"
    },
    {
      quote: "Setting goals is the first step in turning the invisible into the visible.",
     person: "Tony Robbins"
    },
    {
      quote: "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
     person: "Pat Riley"
    },
    {
      quote: "All truths are easy to understand once they are discovered; the point is to discover them.",
     person: "Galileo Galilei"
    },
    {
      quote: "The smallest act of kindness is worth more than the grandest intention.",
     person: "Oscar Wilde"
    },
    {
      quote: "We know from science that nothing in the universe exists as an isolated or independent entity.",
     person: "Margaret Wheatley"
    },
    {
      quote: "Everything in the universe goes by indirection. There are no straight lines.",
     person: "Ralph Emerson"
    },
    {
      quote: "What do we live for, if it is not to make life less difficult for each other?",
     person: "George Eliot"
    },
    {
      quote: "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
     person: "Tenzin Gyatso"
    },
    {
      quote: "We may encounter many defeats but we must not be defeated.",
     person: "Maya Angelou"
    },
    {
      quote: "Every  person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
     person: "Richard Bach"
    },
    {
      quote: "Logic will get you from A to B. Imagination will take you everywhere.",
     person: "Albert Einstein"
    },
    {
      quote: "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen.",
     person: "Sarah Breathnach"
    },
    {
      quote: "The world is but a canvas to the imagination.",
     person: "Henry Thoreau"
    },
    {
      quote: "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along.",
     person: "Lisa Alther"
    },
    {
      quote: "To be happy is to be able to become aware of oneself without fright.",
     person: "Walter Benjamin"
    },
    {
      quote: "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Make the most of yourself for that is all there is of you.",
     person: "Ralph Emerson"
    },
    {
      quote: "Be gentle first with yourself if you wish to be gentle with others.",
     person: "Lama Yeshe"
    },
    {
      quote: "A man who doesn't trust himself can never really trust anyone else.",
     person: "Cardinal Retz"
    },
    {
      quote: "We make our own fortunes and we call them fate.",
     person: "Benjamin Disraeli"
    },
    {
      quote: "Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal.",
     person: "Vince Lombardi"
    },
    {
      quote: "It takes courage to grow up and become who you really are.",
     person: "E. E. Cummings"
    },
    {
      quote: "Always seek out the seed of triumph in every adversity.",
     person: "Og Mandino"
    },
    {
      quote: "Rather than wishing for change, you first must be prepared to change.",
     person: "Catherine Pulsifer"
    },
    {
      quote: "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
     person: "Buddha"
    },
    {
      quote: "Fame usually comes to those who are thinking about something else.",
     person: "Holmes"
    },
    {
      quote: "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination.",
     person: "Napoleon Hill"
    },
    {
      quote: "The superior man acts before he speaks, and afterwards speaks according to his action.",
     person: "Confucius"
    },
    {
      quote: "A single conversation across the table with a wise  person is worth a months study of books.",
     person: "Chinese proverb"
    },
    {
      quote: "The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.",
     person: "Mohandas Gandhi"
    },
    {
      quote: "You can never cross the ocean unless you have the courage to lose sight of the shore.",
     person: null
    },
    {
      quote: "Work for something because it is good, not just because it stands a chance to succeed.",
     person: "Vaclav Havel"
    },
    {
      quote: "Knowledge rests not upon truth alone, but upon error also.",
     person: "Carl Jung"
    },
    {
      quote: "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in.",
     person: "Katherine Mansfield"
    },
    {
      quote: "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
     person: "Victoria Holt"
    },
    {
      quote: "When deeds and words are in accord, the whole world is transformed.",
     person: "Chuang Tzu"
    },
    {
      quote: "Kind words can be short and easy to speak but their echoes are truly endless.",
     person: "Mother Teresa"
    },
    {
      quote: "For everything that lives is holy, life delights in life.",
     person: "William Blake"
    },
    {
      quote: "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world.",
     person: "Dalai Lama"
    },
    {
      quote: "Our passion is our strength.",
     person: "Billie Armstrong"
    },
    {
      quote: "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "Spring is a time for rebirth and the fulfilment of new life.",
     person: "Byron Pulsifer"
    },
    {
      quote: "There is nothing happens to any  person but what was in his power to go through with.",
     person: "Marcus Aurelius"
    },
    {
      quote: "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking.",
     person: "Alfred Korzybski"
    },
    {
      quote: "The art of progress is to preserve order amid change, and to preserve change amid order.",
     person: "Alfred Whitehead"
    },
    {
      quote: "We make a living by what we get, but we make a life by what we give.",
     person: "Winston Churchill"
    },
    {
      quote: "If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart.",
     person: "Friedrich von Schiller"
    },
    {
      quote: "Maxim for life: You get treated in life the way you teach people to treat you.",
     person: "Wayne Dyer"
    },
    {
      quote: "The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it.",
     person: "Charlotte Perkins Gilman"
    },
    {
      quote: "The key to growth is the introduction of higher dimensions of consciousness into our awareness.",
     person: "Lao Tzu"
    },
    {
      quote: "Thought is the blossom; language the bud; action the fruit behind it.",
     person: "Ralph Emerson"
    },
    {
      quote: "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
     person: "Daisaku Ikeda"
    },
    {
      quote: "There is nothing so useless as doing efficiently that which should not be done at all.",
     person: "Peter Drucker"
    },
    {
      quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
     person: "Leonardo da Vinci"
    },
    {
      quote: "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts.",
     person: "William Shakespeare"
    },
    {
      quote: "As we are liberated from our own fear, our presence automatically liberates others.",
     person: "Nelson Mandela"
    },
    {
      quote: "The most successful people are those who are good at plan B.",
     person: "James Yorke"
    },
    {
      quote: "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.",
     person: "Aristotle"
    },
    {
      quote: "To fly as fast as thought, you must begin by knowing that you have already arrived.",
     person: "Richard Bach"
    },
    {
      quote: "Obstacles are those things you see when you take your eyes off the goal.",
     person: "Hannah More"
    },
    {
      quote: "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
     person: "Michelangelo"
    },
    {
      quote: "Great ideas often receive violent opposition from mediocre minds.",
     person: "Albert Einstein"
    },
    {
      quote: "We can change our lives. We can do, have, and be exactly what we wish.",
     person: "Tony Robbins"
    },
    {
      quote: "You are the only  person on earth who can use your ability.",
     person: "Zig Ziglar"
    },
    {
      quote: "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that.",
     person: "Jean Lacordaire"
    },
    {
      quote: "The least of things with a meaning is worth more in life than the greatest of things without it.",
     person: "Carl Jung"
    },
    {
      quote: "The noblest worship is to make yourself as good and as just as you can.",
     person: "Isocrates"
    },
    {
      quote: "Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending.",
     person: "Carl Bard"
    },
    {
      quote: "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
     person: "Denis Waitley"
    },
    {
      quote: "Don't think of it as failure. Think of it as time-released success.",
     person: "Robert Orben"
    },
    {
      quote: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
     person: "Aristotle"
    },
    {
      quote: "I walk slowly, but I never walk backward.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Divide each difficulty into as many parts as is feasible and necessary to resolve it.",
     person: "Rene Descartes"
    },
    {
      quote: "The best place to find a helping hand is at the end of your own arm.",
     person: null
    },
    {
      quote: "We know the truth, not only by the reason, but by the heart.",
     person: "Blaise Pascal"
    },
    {
      quote: "We choose our joys and sorrows long before we experience them.",
     person: "Kahlil Gibran"
    },
    {
      quote: "Anybody can make history. Only a great man can write it.",
     person: "Oscar Wilde"
    },
    {
      quote: "If I know what love is, it is because of you.",
     person: "Hermann Hesse"
    },
    {
      quote: "Allow the world to live as it chooses, and allow yourself to live as you choose.",
     person: "Richard Bach"
    },
    {
      quote: "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.",
     person: "Barack Obama"
    },
    {
      quote: "Compassion and happiness are not a sign of weakness but a sign of strength.",
     person: "Dalai Lama"
    },
    {
      quote: "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
     person: "Franklin D. Roosevelt"
    },
    {
      quote: "Be here now. Be someplace else later. Is that so complicated?",
     person: "David Bader"
    },
    {
      quote: "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich.",
     person: "Mahummad Ali"
    },
    {
      quote: "Learning without reflection is a waste, reflection without learning is dangerous.",
     person: "Confucius"
    },
    {
      quote: "Don't fear failure so much that you refuse to try new things. The saddest summary of life contains three descriptions: could have, might have, and should have.",
     person: null
    },
    {
      quote: "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
     person: "Bruce Lee"
    },
    {
      quote: "I don't believe in failure. It's not failure if you enjoyed the process.",
     person: "Oprah Winfrey"
    },
    {
      quote: "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart.",
     person: "Helen Keller"
    },
    {
      quote: "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
     person: "David Rockefeller"
    },
    {
      quote: "The man who trusts men will make fewer mistakes than he who distrusts them.",
     person: "Cavour"
    },
    {
      quote: "The less effort, the faster and more powerful you will be.",
     person: "Bruce Lee"
    },
    {
      quote: "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light.",
     person: "Ralph Emerson"
    },
    {
      quote: "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle.",
     person: "Anais Nin"
    },
    {
      quote: "The cure for boredom is curiosity. There is no cure for curiosity.",
     person: "Ellen Parr"
    },
    {
      quote: "We can do no great things, only small things with great love.",
     person: "Mother Teresa"
    },
    {
      quote: "Be like the flower, turn your face to the sun.",
     person: "Kahlil Gibran"
    },
    {
      quote: "Remembering a wrong is like carrying a burden on the mind.",
     person: "Buddha"
    },
    {
      quote: "The foolish man seeks happiness in the distance; the wise grows it under his feet.",
     person: "James Openheim"
    },
    {
      quote: "Gratitude is the fairest blossom which springs from the soul.",
     person: "Henry Beecher"
    },
    {
      quote: "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
     person: "Confucius"
    },
    {
      quote: "You cannot have what you do not want.",
     person: "John Acosta"
    },
    {
      quote: "Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.",
     person: "Ralph Waldo Emerson"
    },
    {
      quote: "It is not fair to ask of others what you are unwilling to do yourself.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
     person: "Carl Jung"
    },
    {
      quote: "The best thing in every noble dream is the dreamer...",
     person: "Moncure Conway"
    },
    {
      quote: "Weve got to have a dream if we are going to make a dream come true.",
     person: "Walt Disney"
    },
    {
      quote: "If you want things to be different, perhaps the answer is to become different yourself.",
     person: "Norman Peale"
    },
    {
      quote: "There is nothing impossible to him who will try.",
     person: "Alexander the Great"
    },
    {
      quote: "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom.",
     person: "Theodore Rubin"
    },
    {
      quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
     person: "Harriet Tubman"
    },
    {
      quote: "The only real failure in life is not to be true to the best one knows.",
     person: "Buddha"
    },
    {
      quote: "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
     person: "Albert Einstein"
    },
    {
      quote: "Change will not come if we wait for some other  person or some other time. We are the ones weve been waiting for. We are the change that we seek.",
     person: "Barack Obama"
    },
    {
      quote: "Those who cannot learn from history are doomed to repeat it.",
     person: "George Santayan"
    },
    {
      quote: "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.",
     person: "Carlos Castaneda"
    },
    {
      quote: "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
     person: "Dhammapada"
    },
    {
      quote: "Things that were hard to bear are sweet to remember.",
     person: "Seneca"
    },
    {
      quote: "Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.",
     person: "Henry James"
    },
    {
      quote: "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?",
     person: "Buddha"
    },
    {
      quote: "They can conquer who believe they can.",
     person: "Virgil"
    },
    {
      quote: "Learn to listen. Opportunity could be knocking at your door very softly.",
     person: "Frank Tyger"
    },
    {
      quote: "All action results from thought, so it is thoughts that matter.",
     person: "Sai Baba"
    },
    {
      quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
     person: "Albert Einstein"
    },
    {
      quote: "I love my past. I love my present. I'm not ashamed of what Ive had, and I'm not sad because I have it no longer.",
     person: "Colette"
    },
    {
      quote: "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
     person: "Maya Angelou"
    },
    {
      quote: "Just as much as we see in others we have in ourselves.",
     person: "William Hazlitt"
    },
    {
      quote: "Prosperity depends more on wanting what you have than having what you want.",
     person: "Geoffrey F. Abert"
    },
    {
      quote: "How many cares one loses when one decides not to be something but to be someone.",
     person: "Coco Chanel"
    },
    {
      quote: "He who knows, does not speak. He who speaks, does not know.",
     person: "Lao Tzu"
    },
    {
      quote: "We cannot direct the wind but we can adjust the sails.",
     person: null
    },
    {
      quote: "One may say the eternal mystery of the world is its comprehensibility.",
     person: "Albert Einstein"
    },
    {
      quote: "The self is not something ready-made, but something in continuous formation through choice of action.",
     person: "John Dewey"
    },
    {
      quote: "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
     person: "Mahatma Gandhi"
    },
    {
      quote: "Moments of complete apathy are the best for new creations.",
     person: "Philip Breedveld"
    },
    {
      quote: "The only real mistake is the one from which we learn nothing.",
     person: "John Powell"
    },
    {
      quote: "To dream of the  person you would like to be is to waste the  person you are.",
     person: "Tim Menchen"
    },
    {
      quote: "The important thing is this: to be able at any moment to sacrifice what we are for what we could become.",
     person: "Charles Dubois"
    },
    {
      quote: "Gratitude is not only the greatest of virtues, but the paren't of all the others.",
     person: "Cicero"
    },
    {
      quote: "It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today.",
     person: "Lama Yeshe"
    },
    {
      quote: "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each  person no matter their background or status.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Things do not change; we change.",
     person: "Henry Thoreau"
    },
    {
      quote: "We must learn our limits. We are all something, but none of us are everything.",
     person: "Blaise Pascal"
    },
    {
      quote: "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant.",
     person: "Stephen Sigmund"
    },
    {
      quote: "We are all faced with a series of great opportunities brilliantly disguised as impossible situations.",
     person: "Charles R. Swindoll"
    },
    {
      quote: "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
     person: "Albert Camus"
    },
    {
      quote: "Be a good listener. Your ears will never get you in trouble.",
     person: "Frank Tyger"
    },
    {
      quote: "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom.",
     person: "Buddha"
    },
    {
      quote: "You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving.",
     person: "Anatole France"
    },
    {
      quote: "To listen well is as powerful a means of communication and influence as to talk well.",
     person: "John Marshall"
    },
    {
      quote: "There is only one happiness in life, to love and be loved.",
     person: "George Sand"
    },
    {
      quote: "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth.",
     person: "Matt Zotti"
    },
    {
      quote: "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
     person: "Lao Tzu"
    },
    {
      quote: "Reason and free inquiry are the only effectual agents against error.",
     person: "Thomas Jefferson"
    },
    {
      quote: "The best cure for the body is a quiet mind.",
     person: "Napoleon Bonaparte"
    },
    {
      quote: "See the positive side, the potential, and make an effort.",
     person: "Dalai Lama"
    },
    {
      quote: "By accepting yourself and being fully what you are, your presence can make others happy.",
     person: "Jane Roberts"
    },
    {
      quote: "Never deny a diagnosis, but do deny the negative verdict that may go with it.",
     person: "Norman Cousins"
    },
    {
      quote: "The really unhappy  person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "You cannot be lonely if you like the  person you're alone with.",
     person: "Wayne Dyer"
    },
    {
      quote: "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act.",
     person: "G. K. Chesterton"
    },
    {
      quote: "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
     person: "Buddha"
    },
    {
      quote: "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible.",
     person: "Cadet Maxim"
    },
    {
      quote: "Failure will never overtake me if my determination to succeed is strong enough.",
     person: "Og Mandino"
    },
    {
      quote: "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement.",
     person: "Ralph Marston"
    },
    {
      quote: "Wrinkles should merely indicate where smiles have been.",
     person: "Mark Twain"
    },
    {
      quote: "Your attitude, not your aptitude, will determine your altitude.",
     person: "Zig Ziglar"
    },
    {
      quote: "Let yourself be silently drawn by the stronger pull of what you really love.",
     person: "Rumi"
    },
    {
      quote: "I gave my life to become the  person I am right now. Was it worth it?",
     person: "Richard Bach"
    },
    {
      quote: "Give thanks for a little and you will find a lot.",
     person: "Hausa"
    },
    {
      quote: "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
     person: "Arie de Gues"
    },
    {
      quote: "Forgiveness does not change the past, but it does enlarge the future.",
     person: "Paul Boese"
    },
    {
      quote: "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.",
     person: "Nikola Tesla"
    },
    {
      quote: "Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.",
     person: "Aristotle"
    },
    {
      quote: "The deepest craving of human nature is the need to be appreciated.",
     person: "William James"
    },
    {
      quote: "Love does not consist of gazing at each other, but in looking together in the same direction.",
     person: "Antoine de Saint-Exupery"
    },
    {
      quote: "We have committed the Golden Rule to memory; let us now commit it to life.",
     person: "Edwin Markham"
    },
    {
      quote: "It is with words as with sunbeams. The more they are condensed, the deeper they burn.",
     person: "Robert Southey"
    },
    {
      quote: "When people are like each other they tend to like each other.",
     person: "Tony Robbins"
    },
    {
      quote: "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
     person: "Confucius"
    },
    {
      quote: "Be the change that you want to see in the world.",
     person: "Mohandas Gandhi"
    },
    {
      quote: "The more you care, the stronger you can be.",
     person: "Jim Rohn"
    },
    {
      quote: "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
     person: "Oprah Winfrey"
    },
    {
      quote: "Just trust yourself, then you will know how to live.",
     person: "Goethe"
    },
    {
      quote: "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.",
     person: "Pema Chodron"
    },
    {
      quote: "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
     person: "Jim Rohn"
    },
    {
      quote: "It all depends on how we look at things, and not how they are in themselves.",
     person: "Carl Jung"
    },
    {
      quote: "Giving up doesn't always mean you are weak; sometimes it means that you are strong enough to let go.",
     person: null
    },
    {
      quote: "To climb steep hills requires a slow pace at first.",
     person: "William Shakespeare"
    },
    {
      quote: "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
     person: "Buddha"
    },
    {
      quote: "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.",
     person: "Max Planck"
    },
    {
      quote: "Truth is generally the best vindication against slander.",
     person: "Abraham Lincoln"
    },
    {
      quote: "To follow, without halt, one aim: There is the secret of success.",
     person: "Anna Pavlova"
    },
    {
      quote: "And as we let our own light shine, we unconsciously give other people permission to do the same.",
     person: "Nelson Mandela"
    },
    {
      quote: "What is a weed? A plant whose virtues have not yet been discovered.",
     person: "Ralph Emerson"
    },
    {
      quote: "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
     person: "Ralph Emerson"
    },
    {
      quote: "Many people have gone further than they thought they could because someone else thought they could.",
     person: null
    },
    {
      quote: "We read the world wrong and say that it deceives us.",
     person: "Rabindranath Tagore"
    },
    {
      quote: "If only wed stop trying to be happy wed have a pretty good time.",
     person: "Edith Wharton"
    },
    {
      quote: "You must do the things you think you cannot do.",
     person: "Eleanor Roosevelt"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
     person: "Oscar Wilde"
    },
    {
      quote: "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly.",
     person: "Richard Bach"
    },
    {
      quote: "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes.",
     person: "Edna Millay"
    },
    {
      quote: "Most folks are as happy as they make up their minds to be.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Love is the master key that opens the gates of happiness.",
     person: "Oliver Holmes"
    },
    {
      quote: "The  person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.",
     person: "Cecil B. DeMille"
    },
    {
      quote: "My reputation grows with every failure.",
     person: "George Shaw"
    },
    {
      quote: "Good thoughts are no better than good dreams, unless they be executed.",
     person: "Ralph Emerson"
    },
    {
      quote: "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.",
     person: "Dalai Lama"
    },
    {
      quote: "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
     person: "Buddha"
    },
    {
      quote: "For success, attitude is equally as important as ability.",
     person: "Harry Banks"
    },
    {
      quote: "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
     person: "Colin Powell"
    },
    {
      quote: "A  person who never made a mistake never tried anything new.",
     person: "Albert Einstein"
    },
    {
      quote: "Better than a thousand hollow words is one word that brings peace.",
     person: "Buddha"
    },
    {
      quote: "The possibilities are numerous once we decide to act and not react.",
     person: "George Bernard Shaw"
    },
    {
      quote: "Almost everything comes from nothing.",
     person: "Henri Amiel"
    },
    {
      quote: "Sometimes by losing a battle you find a new way to win the war.",
     person: "Donald Trump"
    },
    {
      quote: "Listen to what you know instead of what you fear.",
     person: "Richard Bach"
    },
    {
      quote: "It is easier to live through someone else than to become complete yourself.",
     person: "Betty Friedan"
    },
    {
      quote: "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change.",
     person: "John Simone"
    },
    {
      quote: "Remember that failure is an event, not a  person.",
     person: "Zig Ziglar"
    },
    {
      quote: "Don't settle for a relationship that won't let you be yourself.",
     person: "Oprah Winfrey"
    },
    {
      quote: "What the caterpillar calls the end of the world, the master calls a butterfly.",
     person: "Richard Bach"
    },
    {
      quote: "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
     person: "Thomas Carlyle"
    },
    {
      quote: "If you do what you've always done, you'll get what youve always gotten.",
     person: "Tony Robbins"
    },
    {
      quote: "Do not wait for leaders; do it alone,  person to  person.",
     person: "Mother Teresa"
    },
    {
      quote: "Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
     person: "Plotinus"
    },
    {
      quote: "Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock.",
     person: "Mary Parrish"
    },
    {
      quote: "We never live; we are always in the expectation of living.",
     person: "Voltaire"
    },
    {
      quote: "Think like a man of action; act like a man of thought.",
     person: "Henri L. Bergson"
    },
    {
      quote: "You can complain because roses have thorns, or you can rejoice because thorns have roses.",
     person: "Ziggy"
    },
    {
      quote: "There is not one big cosmic meaning for all, there is only the meaning we each give to our life.",
     person: "Anais Nin"
    },
    {
      quote: "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
     person: "Lao Tzu"
    },
    {
      quote: "Time you enjoyed wasting was not wasted.",
     person: "John Lennon"
    },
    {
      quote: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
     person: "Albert Camus"
    },
    {
      quote: "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
     person: "Daisaku Ikeda"
    },
    {
      quote: "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
     person: "Confucius"
    },
    {
      quote: "A man's dreams are an index to his greatness.",
     person: "Zadok Rabinowitz"
    },
    {
      quote: "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
     person: "William Lyon Phelps"
    },
    {
      quote: "You teach best what you most need to learn.",
     person: "Richard Bach"
    },
    {
      quote: "Continuous effort, not strength or intelligence is the key to unlocking our potential.",
     person: "Winston Churchill"
    },
    {
      quote: "Obstacles are those frightful things you see when you take your eyes off your goal.",
     person: "Henry Ford"
    },
    {
      quote: "Go for it now. The future is promised to no one.",
     person: "Wayne Dyer"
    },
    {
      quote: "Never tell a young  person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing.",
     person: "John Holmes"
    },
    {
      quote: "Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward.",
     person: "Byron Pulsifer"
    },
    {
      quote: "If we look at the world with a love of life, the world will reveal its beauty to us.",
     person: "Daisaku Ikeda"
    },
    {
      quote: "In skating over thin ice our safety is in our speed.",
     person: "Ralph Emerson"
    },
    {
      quote: "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it.",
     person: "W. Clement Stone"
    },
    {
      quote: "Never promise more than you can perform.",
     person: "Publilius Syrus"
    },
    {
      quote: "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.",
     person: "Nora Roberts"
    },
    {
      quote: "I can't believe that God put us on this earth to be ordinary.",
     person: "Lou Holtz"
    },
    {
      quote: "There are no limitations to the mind except those we acknowledge.",
     person: "Napoleon Hill"
    },
    {
      quote: "It is through science that we prove, but through intuition that we discover.",
     person: "Jules Poincare"
    },
    {
      quote: "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
     person: "Richard Bach"
    },
    {
      quote: "If someone in your life talked to you the way you talk to yourself, you would have left them long ago.",
     person: "Carla Gordon"
    },
    {
      quote: "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself.",
     person: "Edward Ericson"
    },
    {
      quote: "If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor.",
     person: "Daisaku Ikeda"
    },
    {
      quote: "There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.",
     person: "Linda Hogan"
    },
    {
      quote: "Never tell me the sky is the limit when there are footprints on the moon.",
     person: null
    },
    {
      quote: "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.",
     person: "Georg Lichtenberg"
    },
    {
      quote: "The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life.",
     person: "Eckhart Tolle"
    },
    {
      quote: "Take it easy but take it.",
     person: "Woody Guthrie"
    },
    {
      quote: "Blessed is the man who expects nothing, for he shall never be disappointed.",
     person: "Alexander Pope"
    },
    {
      quote: "He who knows others is wise. He who knows himself is enlightened.",
     person: "Lao Tzu"
    },
    {
      quote: "The best way to predict your future is to create it.",
     person: "Peter Drucker"
    },
    {
      quote: "A garden is always a series of losses set against a few triumphs, like life itself.",
     person: "May Sarton"
    },
    {
      quote: "If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow.",
     person: "Rachel Carson"
    },
    {
      quote: "Never mistake motion for action.",
     person: "Ernest Hemingway"
    },
    {
      quote: "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world.",
     person: "Hannah Senesh"
    },
    {
      quote: "One who is too insistent on his own views, finds few to agree with him.",
     person: "Lao Tzu"
    },
    {
      quote: "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.",
     person: "Harry Burchell Mathews"
    },
    {
      quote: "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
     person: "Voltaire"
    },
    {
      quote: "The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
     person: "George Shaw"
    },
    {
      quote: "Good instincts usually tell you what to do long before your head has figured it out.",
     person: "Michael Burke"
    },
    {
      quote: "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens.",
     person: "Pema Chodron"
    },
    {
      quote: "Those who dream by day are cognizant of many things which escape those who dream only by night.",
     person: "Edgar Allan Poe"
    },
    {
      quote: "We cannot hold a torch to light another's path without brightening our own.",
     person: "Ben Sweetland"
    },
    {
      quote: "You are never given a wish without also being given the power to make it come true. You may have to work for it, however.",
     person: "Richard Bach"
    },
    {
      quote: "Kind words can be short and easy to speak, but their echoes are truly endless.",
     person: "Mother Teresa"
    },
    {
      quote: "Count your joys instead of your woes. Count your friends instead of your foes.",
     person: null
    },
    {
      quote: "Dreams come true. Without that possibility, nature would not incite us to have them.",
     person: "John Updike"
    },
    {
      quote: "Staying in one place is the best path to be taken over and surpassed by many.",
     person: "Byron Pulsifer"
    },
    {
      quote: "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
     person: "Carl Sagan"
    },
    {
      quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
     person: "Helen Keller"
    },
    {
      quote: "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.",
     person: "Jawaharlal Nehru"
    },
    {
      quote: "I have no special talent. I am only passionately curious.",
     person: "Albert Einstein"
    },
    {
      quote: "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress.",
     person: "Elizabeth Montagu"
    },
    {
      quote: "The height of your accomplishments will equal the depth of your convictions.",
     person: "William Scolavino"
    },
    {
      quote: "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
     person: "Rabbi Hillel"
    },
    {
      quote: "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
     person: "Audre Lorde"
    },
    {
      quote: "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know.",
     person: "Alexis Carrel"
    },
    {
      quote: "To get the full value of joy you must have someone to divide it with.",
     person: "Mark Twain"
    },
    {
      quote: "Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it.",
     person: "Johann Wolfgang von Goethe"
    },
    {
      quote: "We lost because we told ourselves we lost.",
     person: "Leo Tolstoy"
    },
    {
      quote: "Success is determined by those whom prove the impossible, possible.",
     person: "James Pence"
    },
    {
      quote: "Good advice is always certain to be ignored, but that's no reason not to give it.",
     person: "Agatha Christie"
    },
    {
      quote: "The winner ain't the one with the fastest car it's the one who refuses to lose.",
     person: "Dale Earnhardt"
    },
    {
      quote: "Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life.",
     person: "Robert C. Solomon"
    },
    {
      quote: "No one has a finer command of language than the  person who keeps his mouth shut.",
     person: "Sam Rayburn"
    },
    {
      quote: "The only  person who never makes mistakes is the  person who never does anything.",
     person: "Denis Waitley"
    },
    {
      quote: "Life is what happens to you while you're busy making other plans.",
     person: "John Lennon"
    },
    {
      quote: "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought.",
     person: "Jonathan Swift"
    },
    {
      quote: "If you have knowledge, let others light their candles in it.",
     person: "Margaret Fuller"
    },
    {
      quote: "It is impossible for a man to learn what he thinks he already knows.",
     person: "Epictetus"
    },
    {
      quote: "If you find yourself in a hole, the first thing to do is stop digging.",
     person: "Will Rogers"
    },
    {
      quote: "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
     person: "Plutarch"
    },
    {
      quote: "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.",
     person: "Lee Womack"
    },
    {
      quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
     person: "Marcus Aurelius"
    },
    {
      quote: "Six essential qualities that are the key to success: Sincerity,  personal integrity, humility, courtesy, wisdom, charity.",
     person: "William Menninger"
    },
    {
      quote: "I have an everyday religion that works for me. Love yourself first, and everything else falls into line.",
     person: "Lucille Ball"
    },
    {
      quote: "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate.",
     person: "Chuang Tzu"
    },
    {
      quote: "Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.",
     person: "Jane Addams"
    },
    {
      quote: "The energy of the mind is the essence of life.",
     person: "Aristotle"
    },
    {
      quote: "Begin, be bold, and venture to be wise.",
     person: "Horace"
    },
    {
      quote: "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.",
     person: "Lao Tzu"
    },
    {
      quote: "A wise man will make more opportunities than he finds.",
     person: "Francis Bacon"
    },
    {
      quote: "Slow down and enjoy life. It's not only the scenery you miss by going too fast you also miss the sense of where you are going and why.",
     person: "Eddie Cantor"
    },
    {
      quote: "Miracles come in moments. Be ready and willing.",
     person: "Wayne Dyer"
    },
    {
      quote: "Numberless are the worlds wonders, but none more wonderful than man.",
     person: "Sophocles"
    },
    {
      quote: "So is cheerfulness, or a good temper, the more it is spent, the more remains.",
     person: "Ralph Emerson"
    },
    {
      quote: "The true way to render ourselves happy is to love our work and find in it our pleasure.",
     person: "Francoise de Motteville"
    },
    {
      quote: "When you judge another, you do not define them, you define yourself.",
     person: "Wayne Dyer"
    },
    {
      quote: "Argue for your limitations, and sure enough they're yours.",
     person: "Richard Bach"
    },
    {
      quote: "He who wishes to secure the good of others, has already secured his own.",
     person: "Confucius"
    },
    {
      quote: "Wise men talk because they have something to say; fools, because they have to say something.",
     person: "Plato"
    },
    {
      quote: "Life is really simple, but we insist on making it complicated.",
     person: "Confucius"
    },
    {
      quote: "The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face.",
     person: "Jim Bishop"
    },
    {
      quote: "Everything that irritates us about others can lead us to a better understanding of ourselves.",
     person: "Carl Jung"
    },
    {
      quote: "Beware of the half truth. You may have gotten hold of the wrong half.",
     person: null
    },
    {
      quote: "The greatest mistake you can make in life is to be continually fearing you will make one.",
     person: "Elbert Hubbard"
    },
    {
      quote: "I have never been hurt by anything I didn't say.",
     person: "Calvin Coolidge"
    },
    {
      quote: "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.",
     person: "Thomas Kempis"
    },
    {
      quote: "Adversity causes some men to break, others to break records.",
     person: "William Ward"
    },
    {
      quote: "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men.",
     person: "Thomas Fuller"
    },
    {
      quote: "The industrial landscape is already littered with remains of once successful companies that could not adapt their strategic vision to altered conditions of competition.",
     person: "Abernathy"
    },
    {
      quote: "Example has more followers than reason.",
     person: "Christian Bovee"
    },
    {
      quote: "One that desires to excel should endeavour in those things that are in themselves most excellent.",
     person: "Epictetus"
    },
    {
      quote: "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.",
     person: "Mary Pickford"
    },
    {
      quote: "The only Zen you find on the tops of mountains is the Zen you bring up there.",
     person: "Robert Pirsig"
    },
    {
      quote: "Gratitude is riches. Complaint is poverty.",
     person: "Doris Day"
    },
    {
      quote: "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.",
     person: "Richard Needham"
    },
    {
      quote: "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
     person: "Byron Pulsifer"
    },
    {
      quote: "You can stand tall without standing on someone. You can be a victor without having victims.",
     person: "Harriet Woods"
    },
    {
      quote: "Bad times have a scientific value. These are occasions a good learner would not miss.",
     person: "Ralph Emerson"
    },
    {
      quote: "It's not who you are that holds you back, it's who you think you're not.",
     person: null
    },
    {
      quote: "All children are artists. The problem is how to remain an artist once he grows up.",
     person: "Pablo Picasso"
    },
    {
      quote: "Either I will find a way, or I will make one.",
     person: "Philip Sidney"
    },
    {
      quote: "He who knows that enough is enough will always have enough.",
     person: "Lao Tzu"
    },
    {
      quote: "The only way to have a friend is to be one.",
     person: "Ralph Emerson"
    },
    {
      quote: "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.",
     person: "Anne Bradstreet"
    },
    {
      quote: "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
     person: "Marianne Williamson"
    },
    {
      quote: "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
     person: "Carl Jung"
    },
    {
      quote: "There is never enough time to do everything, but there is always enough time to do the most important thing.",
     person: "Brian Tracy"
    },
    {
      quote: "You really can change the world if you care enough.",
     person: "Marian Edelman"
    },
    {
      quote: "What you are is what you have been. What you will be is what you do now.",
     person: "Buddha"
    },
    {
      quote: "Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.",
     person: "Gordon Hinckley"
    },
    {
      quote: "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
     person: "Benjamin Haydon"
    },
    {
      quote: "Music in the soul can be heard by the universe.",
     person: "Lao Tzu"
    },
    {
      quote: "What we see depends mainly on what we look for.",
     person: "John Lubbock"
    },
    {
      quote: "To hell with circumstances; I create opportunities.",
     person: "Bruce Lee"
    },
    {
      quote: "The truest greatness lies in being kind, the truest wisdom in a happy mind.",
     person: "Ella Wilcox"
    },
    {
      quote: "An ounce of emotion is equal to a ton of facts.",
     person: "John Junor"
    },
    {
      quote: "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
     person: "Barbara De Angelis"
    },
    {
      quote: "Great is the art of beginning, but greater is the art of ending.",
     person: "Lazurus Long"
    },
    {
      quote: "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
     person: "Wayne Dyer"
    },
    {
      quote: "Nothing will work unless you do.",
     person: "Maya Angelou"
    },
    {
      quote: "Our ability to achieve happiness and success depends on the strength of our wings.",
     person: "Catherine Pulsifer"
    },
    {
      quote: "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
     person: "Theodore H. White"
    },
    {
      quote: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
     person: "Melody Beattie"
    },
    {
      quote: "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.",
     person: "Byron Pulsifer"
    },
    {
      quote: "We are all inclined to judge ourselves by our ideals; others, by their acts.",
     person: "Harold Nicolson"
    },
    {
      quote: "Nothing is a waste of time if you use the experience wisely.",
     person: "Rodin"
    },
    {
      quote: "If one way be better than another, that you may be sure is natures way.",
     person: "Aristotle"
    },
    {
      quote: "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
     person: "Napoleon Hill"
    },
    {
      quote: "It is not in the stars to hold our destiny but in ourselves.",
     person: "William Shakespeare"
    },
    {
      quote: "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.",
     person: "Tony Robbins"
    },
    {
      quote: "I will prepare and some day my chance will come.",
     person: "Abraham Lincoln"
    },
    {
      quote: "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
     person: "Tom Jackson"
    }
  ]

  btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
     person.innerText=quotes[random]. person;
  })