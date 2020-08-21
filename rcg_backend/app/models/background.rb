class Background < ApplicationRecord
    belongs_to :character
    # validates [:background_title, :ideal, :alignment, :bond, :flaw], presence: true
    
    def self.make_new
        backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"]
        # background = self.new(background_title: backgrounds.sample)
        background = self.new(background_title: "Acolyte")
        if background.background_title == "Acolyte"
            background.make_acolyte
        elsif background.background_title == "Charlatan"
            background.make_charlatan
        elsif background.background_title == "Criminal"
            background.make_criminal
        elsif background.background_title == "Entertainer" 
            background.make_entertainer
        elsif background.background_title == "Folk Hero"
            background.make_folk_hero
        elsif background.background_title == "Guild Artisan" 
            background.make_guild_artisan
        elsif background.background_title == "Hermit"
            background.make_hermit
        elsif background.background_title == "Noble"
            background.make_noble
        elsif background.background_title == "Outlander"
            background.make_outlander
        elsif background.background_title == "Sage"
            background.make_sage
        elsif background.background_title == "Sailor"
            background.make_sailor
        elsif background.background_title == "Soldier"
            background.make_soldier
        elsif background.background_title == "Urchin"
            background.make_urchin
        else
            background.background_title = "error"   
        end 
    end 


    def make_acolyte
        self.personality_trait = [
            "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.", 
            "I can find common ground between the fiercest enemies, empathising with them and always working towards peace.", 
            "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
            "Nothing can shake my optimistic attitude.", 
            "I quote (or misquote) sacred texts and proverbs in almost every situation.", 
            "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.", 
            "I've enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.", 
            "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."
        ].sample

        self.ideal = [
            "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)", 
            "Charity. I always try to help those in need, no matter what the personal cost. (Good)",
            "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
            "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)",
            "Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)", 
            "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings."
        ].sample

        self.alignment = assign_alignment(self.ideal)

        # if self.ideal == "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)"
        #     self.alignment = "Lawful #{@@goodness.sample}"
        # elsif self.ideal == "Charity. I always try to help those in need, no matter what the personal cost. (Good)"
        #     self.alignment = "#{@@lawfulness.sample} Good"
        # elsif self.ideal == "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)"
        #     self.alignment = "Chaotic #{@@goodness.sample}"
        # elsif self.ideal == "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)"
        #     self.alignment = "Lawful #{@@goodness.sample}"
        # elsif self.ideal == "Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)"
        #     self.alignment = "Lawful #{@@goodness.sample}"
        # elsif self.ideal == "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings."
        #     self.alignment = "#{@@lawfulness.sample} #{@@goodness.sample}"
        # else
        #     self.alignment = "error"
        # end

        self.bond = [
            "I would die to recover an ancient relic of my faith that was lost long ago.", 
            "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
            "I owe my life to the priest who took me in when my parents died.",
            "Everything I do is for the common people.",
            "I will do anything to protect the temple where I served.", 
            "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
        ].sample

        self.flaw = [
            "I judge others harshly, and myself even more severely.", 
            "I put too much trust in those who wield power within my temple's hierarchy.", 
            "My piety sometimes leads me to blindly trust those that profess faith in my god.", 
            "I am inflexible in my thinking.", 
            "I am suspicious of strangers and expect the worst of them.", 
            "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
        ].sample

        self
    end 


    def make_charlatan
        self.personality_trait = [
            "I fall in and out of love easily, and am always pursuing someone.",
            "I have a joke for every occasion, especially occasions where humor is inappropriate.",
            "Flattery is my preferred trick for getting what I want.",
            "I'm a born gambler who can't resist taking a risk for a potential payoff.", 
            "I lie about almost everything, even when there's no reason to.", 
            "Sarcasm and insults are my weapons of choice.", 
            "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.", 
            "I pocket anything I see that might have some value."
        ].sample

        self.ideal = [
            "Independence. I am a free spirit—no one tells me what to do. (Chaotic)", 
            "Fairness. I never target people who can't afford to lose a few coins. (Lawful)", 
            "Charity. I distribute the money I acquire to the people who really need it. (Good)", 
            "Creativity. I never run the same con twice. (Chaotic)", 
            "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)", 
            "Aspiration. I'm determined to make something of myself."
        ].sample

        if self.ideal == "Independence. I am a free spirit—no one tells me what to do. (Chaotic)"
            self.alignment = "Chaotic #{@@goodness.sample}"
        elsif self.ideal == "Fairness. I never target people who can't afford to lose a few coins. (Lawful)" 
            self.alignment = "Lawful #{@@goodness.sample}"
        elsif self.ideal == "Charity. I distribute the money I acquire to the people who really need it. (Good)"
            self.alignment = "#{@@lawfulness.sample} Good"
        elsif self.ideal == "Creativity. I never run the same con twice. (Chaotic)"
            self.alignment = "Chaotic #{@@goodness.sample}"
        elsif self.ideal == "Friendship. Material goods come and go. Bonds of friendship last forever. (Good)"
            self.alignment = "#{@@lawfulness.sample} Good"
        elsif self.ideal == "Aspiration. I'm determined to make something of myself."
            self.alignment = "#{@@lawfulness.sample} #{@@goodness.sample}"
        else
            self.alignment = "error"
        end

        self.bond = [
            "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.", 
            "I owe everything to my mentor—a horrible person who's probably rotting in jail somewhere.", 
            "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.", 
            "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.", 
            "A powerful person killed someone I love. Some day soon, I'll have my revenge.", 
            "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
        ].sample

        self.flaw = [
            "I can't resist a pretty face.", 
            "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.", 
            "I'm convinced that no one could ever fool me the way I fool others.", 
            "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.", 
            "I can't resist swindling people who are more powerful than me.", 
            "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
        ].sample

        self
    end


    def make_criminal
        self.personality_trait = [
            "I always have a plan for when things go wrong.",
            "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
            "The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.", 
            "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.", 
            "I don't pay attention to the risks in a situation. Never tell me the odds.", 
            "The best way to get me to do something is to tell me I can't do it.", 
            "I blow up at the slightest insult."
        ].sample

        self.ideal = [
            "Honor. I don't steal from others in the trade. (Lawful)", 
            "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)", 
            "Charity. I steal from the wealthy so that I can help people in need. (Good)", 
            "Greed. I will do whatever it takes to become wealthy. (Evil)", 
            "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)", 
            "Redemption. There's a spark of good in everyone. (Good)"
        ].sample

        if self.ideal == "Honor. I don't steal from others in the trade. (Lawful)"
            self.alignment = "Lawful #{@@goodness.sample}"
        elsif self.ideal == "Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)"
            self.alignment = "Chaotic #{@@goodness.sample}"
        elsif self.ideal == "Charity. I steal from the wealthy so that I can help people in need. (Good)" 
            self.alignment = "#{@@lawfulness.sample} Good"
        elsif self.ideal == "Greed. I will do whatever it takes to become wealthy. (Evil)" 
            self.alignment = "#{@@lawfulness.sample} Evil"
        elsif self.ideal == "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
            self.alignment = "Neutral #{@@goodness.sample}"
        elsif self.ideal == "Redemption. There's a spark of good in everyone. (Good)"
            self.alignment = "#{@@lawfulness.sample} Good"
        else 
            self.alignment = "error"
        end

        self.bond = [
            "I'm trying to pay off an old debt I owe to a generous benefactor.", 
            "My ill-gotten gains go to support my family.", 
            "Something important was taken from me, and I aim to steal it back.", 
            "I will become the greatest thief that ever lived.", 
            "I'm guilty of a terrible crime. I hope I can redeem myself for it.", 
            "Someone I loved died because of a mistake I made. That will never happen again."
        ].sample

        self.flaw = [
            "When I see something valuable, I can't think about anything but how to steal it.", 
            "When faced with a choice between money and my friends, I usually choose the money.", 
            "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.", 
            "I have a 'tell' that reveals when I'm lying.", 
            "I turn tail and run when things look bad.", 
            "An innocent person is in prison for a crime that I committed. I'm okay with that."
        ].sample

        self
    end 


    def make_entertainer
        self.personality_trait = [
            "I know a story relevant to almost every situation.", 
            "Whenever I come to a new place, I collect local rumors and spread gossip.", 
            "I'm a hopeless romantic, always searching for that 'special someone'.", 
            "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.", 
            "I love a good insult, even one directed at me.", 
            "I get bitter if I'm not the center of attention.", 
            "I'll settle for nothing less than perfection.", 
            "I change my mood or my mind as quickly as I change key in a song."
        ].sample

        self.ideal = [
            "Beauty. When I perform, I make the world better than it was. (Good)", 
            "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)", 
            "Creativity. The world is in need of new ideas and bold action. (Chaotic)",
            "Greed. I'm only in it for the money and fame. (Evil)", 
            "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)", 
            "Honesty. Art should reflect the soul; it should come from within and reveal who we really are."
        ].sample

        if self.ideal == "Beauty. When I perform, I make the world better than it was. (Good)"
            self.alignment = "#{@@lawfulness.sample} Good"
        elsif self.ideal == "Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
            self.alignment = "Lawful #{@@goodness.sample}"
        elsif self.ideal == "Creativity. The world is in need of new ideas and bold action. (Chaotic)"
            self.alignment = "Chaotic #{@@goodness.sample}"
        elsif self.ideal == "Greed. I'm only in it for the money and fame. (Evil)"
            self.alignment = "#{@@lawfulness.sample} Evil"
        elsif self.ideal == "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
            self.alignment = "#{@@lawfulness.sample} Neutral"
        elsif self.ideal == "Honesty. Art should reflect the soul; it should come from within and reveal who we really are."
            self.alignment = "#{@@lawfulness.sample} #{@@goodness.sample}"
        else 
            self.alignment = "error"
        end 

        self.bond = [
            "My instrument is my most treasured possession, and it reminds me of someone I love.", 
            "Someone stole my precious instrument, and someday I'll get it back.", 
            "I want to be famous, whatever it takes.", 
            "I idolize a hero of the old tales and measure my deeds against that person's.", 
            "I will do anything to prove myself superior to my hated rival.", 
            "I would do anything for the other members of my old troupe."
        ].sample

        self.flaw = [
            "I'll do anything to win fame and renown.", 
            "I'm a sucker for a pretty face.", 
            "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.", 
            "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.", 
            "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.", 
            "Despite my best efforts, I am unreliable to my friends."
        ].sample

        self
    end


    def make_folk_hero
        self.personality_trait = [
            "I judge people by their actions, not their words.", 
            "If someone is in trouble, I'm always ready to lend help.", 
            "When I set my mind to something, I follow through no matter what gets in my way.", 
            "I have a strong sense of fair play and always try to find the most equitable solution to arguments.", 
            "I'm confident in my own abilities and do what I can to instill confidence in others.", 
            "Thinking is for other people. I prefer action.", 
            "I misuse long words in an attempt to sound smarter.", 
            "I get bored easily. When am I going to get on with my destiny?"
        ].sample

        self.ideal = [
            "Respect. People deserve to be treated with dignity and respect. (Good)", 
            "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)", 
            "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)", 
            "Might. If I become strong, I can take what I want—what I deserve. (Evil)", 
            "Sincerity. There's no good in pretending to be something I'm not. (Neutral)", 
            "Destiny. Nothing and no one can steer me away from my higher calling."
        ].sample

        if self.ideal == "Respect. People deserve to be treated with dignity and respect. (Good)"
            self.alignment = "#{@@lawfulness.sample} Good"
        elsif self.ideal == "Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
            self.alignment = "Lawful #{@@goodness.sample}"
        elsif self.ideal == "Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)"
            self.alignment = "Chaotic #{@@goodness.sample}"
        elsif self.ideal == "Might. If I become strong, I can take what I want—what I deserve. (Evil)" 
            self.alignment = "#{@@lawfulness.sample} Evil"
        elsif self.ideal == "Sincerity. There's no good in pretending to be something I'm not. (Neutral)"
            self.alignment = "#{@@lawfulness.sample} Neutral"
        elsif self.ideal == "Destiny. Nothing and no one can steer me away from my higher calling."
            self.alignment = "#{@@lawfulness.sample} #{@@goodness.sample}"
        else 
            self.alignment = "error"
        end 

        self.bond = [
            "I have a family, but I have no idea where they are. One day, I hope to see them again.", 
            "I worked the land, I love the land, and I will protect the land.", 
            "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.", 
            "My tools are symbols of my past life, and I carry them so that I will never forget my roots.", 
            "I protect those who cannot protect themselves.", 
            "I wish my childhood sweetheart had come with me to pursue my destiny."
        ].sample

        self.flaw = [
            "The tyrant who rules my land will stop at nothing to see me killed.", 
            "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.", 
            "The people who knew me when I was young know my shameful secret, so I can never go home again.", 
            "I have a weakness for the vices of the city, especially hard drink.",
            "Secretly, I believe that things would be better if I were a tyrant lording over the land.", 
            "I have trouble trusting in my allies."
        ].sample

        self
    end


    # backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Hermit", "Noble", "Outlander", "Sage", "Sailor", "Soldier", "Urchin"]
    # t.string :background_title
    # t.string :personality_trait
    # t.string :ideal
    # t.string :alignment
    # t.string :bond
    # t.string :flaw

    def assign_alignment(ideal) 
        lawfulness = ["Lawful", "Neutral", "Chaotic"]
        goodness = ["Good", "Neutral", "Evil"]
        half_alignment = ideal.split(' ').last.gsub(/[()]/, "")
        if lawfulness.include? half_alignment
            return "#{half_alignment} #{goodness.sample}"
        elsif goodness.include? half_alignment
            return "#{lawfulness.sample} #{half_alignment}"
        else 
            return "error"
        end
    end

end
