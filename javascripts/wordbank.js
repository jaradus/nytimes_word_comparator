var word_bank_duplicates =  ['ourselves', 'our', 'us', 'we', 'you', 'your', 'awesome', 'bizarre', 'buzz', 'crazy', 'first', 'last', 'complete', 'entire', 'full', 'greatest', 'gross', 'outright', 'perfect', 'total', 'full', 'perfect', 'aggregate', 'all', 'exclusive', 'gross', 'integral', 'total', 'unabridged', 'accomplished', 'choate', 'completed', 'concentrated', 'conclusive', 'consummate', 'every', 'exhaustive', 'fixed', 'fulfilled', 'inclusive', 'outright', 'better', 'biggest', 'greater', 'highest', 'largest', 'max', 'maximum', 'ultimate', 'utmost', 'uttermost', 'acme', 'apogee', 'climax', 'crest', 'crown', 'culmination', 'cusp', 'greatest', 'height', 'max', 'maximum', 'meridian', 'most', 'peak', 'pinnacle', 'point', 'roof', 'spire', 'sublimity', 'summit', 'tip', 'tops', 'vertex', 'zenith', 'abundantly', 'conspicuously', 'eminently', 'emphatically', 'enormously', 'exceedingly', 'exceptionally', 'extremely', 'famously', 'glaringly', 'highly', 'hugely', 'immeasurably', 'immensely', 'incalculably', 'incomparably', 'incredibly', 'indeed', 'infinitely', 'inimitably', 'intensely', 'largely', 'markedly', 'mightily', 'most', 'much', 'notably', 'powerfully', 'remarkably', 'strikingly', 'superlatively', 'supremely', 'surpassingly', 'tremendously', 'vastly', 'above', 'better', 'big', 'chief', 'considerable', 'dominant', 'elder', 'exceeding', 'extensive', 'extreme', 'greater', 'hefty', 'higher', 'large', 'larger', 'leading', 'main', 'most', 'oversized', 'primary', 'senior', 'sizable', 'superior', 'supreme', 'ultra', 'upper', 'uppermost', 'best', 'biggest', 'greatest', 'largest', 'maximal', 'most', 'mostest', 'outside', 'paramount', 'superlative', 'supreme', 'top', 'topmost', 'ultimate', 'apex', 'apogee', 'ceiling', 'climax', 'crest', 'culmination', 'extremity', 'height', 'max', 'maxi', 'most', 'nonpareil', 'peak', 'pinnacle', 'preeminence', 'record', 'summit', 'supremacy', 'top', 'utmost', 'uttermost', 'zenith', 'aces', 'alone', 'best', 'champion', 'excellent', 'faultless', 'greatest', 'incomparable', 'matchless', 'most', 'nonpareil', 'only', 'outstanding', 'perfect', 'super', 'superlative', 'supreme', 'tops', 'unequaled', 'unexampled', 'unique', 'unmatched', 'unparagoned', 'unparalleled', 'unrivaled', 'unsurpassed', 'acme', 'apex', 'apogee', 'climax', 'cone', 'crown', 'culmination', 'greatest', 'height', 'max', 'most', 'needle', 'obelisk', 'peak', 'pyramid', 'spire', 'steeple', 'summit', 'tops', 'tower', 'vertex', 'zenith', 'agitating', 'astonishing', 'breathtaking', 'cool', 'dandy', 'divine', 'dramatic', 'eloquent', 'exceptional', 'exciting', 'fabulous', 'glorious', 'impressive', 'incredible', 'keen', 'marvelous', 'most', 'moving', 'smashing', 'spectacular', 'stirring', 'surprising', 'thrilling', 'acme', 'apex', 'apogee', 'capstone', 'climax', 'crest', 'crown', 'culmination', 'head', 'height', 'max', 'meridian', 'most', 'peak', 'pinnacle', 'roof', 'vertex', 'zenith', 'extreme', 'highest', 'incomparable', 'max', 'maxi', 'maximum', 'most', 'paramount', 'preeminent', 'significant', 'superlative', 'supreme', 'surpassing', 'topmost', 'towering', 'transcendent', 'unequalable', 'unmatchable', 'unsurpassable', 'utmost', 'anomalous', 'best', 'exceptional', 'extraordinary', 'incomparable', 'inimitable', 'matchless', 'most', 'nonpareil', 'novel', 'only', 'peerless', 'primo', 'rare', 'singular', 'special', 'standout', 'strange', 'uncommon', 'unequaled', 'unexampled', 'unimaginable', 'unmatched', 'unparagoned', 'unparalleled', 'unprecedented', 'unreal', 'unrivaled', 'utmost', 'weird', 'alone', 'champ', 'champion', 'consummate', 'exceptional', 'greatest', 'incomparable', 'matchless', 'most', 'nonpareil', 'only', 'peerless', 'rare', 'single', 'singular', 'ten', 'tops', 'unequaled', 'unique', 'unmatched', 'unprecedented', 'unrivaled', 'unsurpassed', 'winner', 'absolute', 'chief', 'complete', 'entire', 'exhaustive', 'farthest', 'final', 'full', 'furthermost', 'greatest', 'highest', 'last', 'maximal', 'most', 'outermost', 'outside', 'paramount', 'plenary', 'preeminent', 'remotest', 'sheer', 'supreme', 'thorough', 'thoroughgoing', 'top', 'topmost', 'total', 'ultimate', 'ultra', 'unconditional', 'undiminished', 'unlimited', 'unmitigated', 'unqualified', 'unreserved', 'uttermost', 'whole', 'apical', 'best', 'capital', 'chief', 'crown', 'head', 'maximal', 'maximum', 'most', 'paramount', 'preeminent', 'principal', 'superlative', 'supreme', 'tiptop', 'top', 'uppermost', 'zenithal', 'boss', 'cooler', 'higher', 'larger', 'largest', 'leading', 'most', 'outstanding', 'preeminent', 'super', 'superlative', 'terrific', 'bigger', 'choice', 'exceeding', 'exceptional', 'finer', 'fitter', 'greater', 'improved', 'larger', 'preferable', 'preferred', 'prominent', 'sharpened', 'sophisticated', 'superior', 'surpassing', 'worthier', 'bigger', 'greater', 'longer', 'more', 'preponderant', 'weightier', 'better', 'biggest', 'greater', 'highest', 'largest', 'max', 'maximum', 'ultimate', 'beautiful', 'elevated', 'elite', 'eminent', 'greater', 'important', 'above', 'bigger', 'greater', 'over', 'surpassing', 'better', 'bigger', 'bulkier', 'greater', 'largest', 'longer', 'more', 'most', 'preponderant', 'weightier', 'brilliant', 'champion', 'distinguished', 'excellent', 'expert', 'great', 'master', 'outstanding', 'avant', 'ace', 'attractive', 'choice', 'commendable', 'cool', 'copacetic', 'crackerjack', 'deserving', 'dream', 'estimable', 'excellent', 'exquisite', 'fine', 'good', 'great', 'greatest', 'keen', 'laudable', 'meritable', 'meritorious', 'neat', 'peachy', 'praiseworthy', 'rare', 'solid', 'super', 'superior', 'unreal', 'valuable', 'wicked', 'wonderful', 'worthy', 'awful', 'desperate', 'enormous', 'excessive', 'extreme', 'great', 'intense', 'loud', 'terrible', 'abounding', 'abundant', 'big', 'bounteous', 'bountiful', 'broad', 'capacious', 'commodious', 'copious', 'enough', 'expansive', 'extensive', 'full', 'galore', 'generous', 'great', 'heavy', 'large', 'lavish', 'liberal', 'plenteous', 'plentiful', 'plenty', 'profuse', 'rich', 'roomy', 'spacious', 'spare', 'substantial', 'unrestricted', 'voluminous', 'wide', 'greatly', 'profoundly', 'very', 'conspicuously', 'exceedingly', 'extremely', 'greatly', 'highly', 'notably', 'outstandingly', 'prominently', 'remarkably', 'strikingly', 'suitably', 'surpassingly', 'very', 'acutely', 'almighty', 'awfully', 'drastically', 'exceedingly', 'exceptionally', 'excessively', 'exorbitantly', 'extraordinarily', 'highly', 'hugely', 'immensely', 'immoderately', 'inordinately', 'intensely', 'markedly', 'mortally', 'notably', 'over', 'overly', 'overmuch', 'parlous', 'plenty', 'powerful', 'prohibitively', 'quite', 'radically', 'rarely', 'remarkably', 'severely', 'strikingly', 'surpassingly', 'terribly', 'terrifically', 'too', 'totally', 'ultra', 'uncommonly', 'unduly', 'unusually', 'utterly', 'very', 'violently', 'vitally', 'decidedly', 'extremely', 'greatly', 'incomparably', 'much', 'notably', 'quite', 'significantly', 'somewhat', 'very', 'well', 'absolute', 'accurate', 'actual', 'certain', 'demonstrable', 'exact', 'factual', 'good', 'hard', 'honest', 'indubitable', 'kosher', 'legitimate', 'literal', 'natural', 'official', 'original', 'palpable', 'plain', 'positive', 'precise', 'proved', 'pure', 'sound', 'sterling', 'bottomless', 'boundless', 'complete', 'deep', 'endless', 'extreme', 'illimitable', 'incalculable', 'infinite', 'profound', 'thorough', 'unending', 'unfathomable', 'vast', 'acute', 'bitter', 'deep', 'energetic', 'excessive', 'extraordinary', 'extreme', 'fierce', 'great', 'harsh', 'heightened', 'intensified', 'intensive', 'powerful', 'profound', 'protracted', 'sharp', 'strong', 'violent', 'vivid', 'agonizing', 'ardent', 'biting', 'burning', 'close', 'concentrated', 'consuming', 'cutting', 'diligent', 'eager', 'earnest', 'exaggerated', 'exceptional', 'exquisite', 'fanatical', 'fervent', 'fervid', 'forcible', 'full', 'hard', 'aggressive', 'agile', 'alert', 'alive', 'animated', 'assiduous', 'bold', 'brisk', 'bustling', 'busy', 'chipper', 'daring', 'dashing', 'determined', 'dexterous', 'diligent', 'dynamic', 'eager', 'energetic', 'engaged', 'enlivened', 'enterprising', 'enthusiastic', 'eventful', 'fireball', 'forceful', 'forcible', 'fresh', 'frisky', 'hyper', 'industrious', 'intense', 'inventive', 'jumping', 'keen', 'lively', 'nimble', 'perky', 'persevering', 'purposeful', 'pushing', 'quick', 'rapid', 'ready', 'resolute', 'sharp', 'sprightly', 'spry', 'whiz', 'zealous', 'breakthrough', 'excellent', 'exceptional', 'extreme', 'first', 'foremost', 'forward', 'higher', 'late', 'leading', 'liberal', 'precocious', 'progressive', 'radical', 'unconventional', 'disturbing', 'excruciating', 'extreme', 'fierce', 'harrowing', 'intense', 'racking', 'struggling', 'tearing', 'tormenting', 'tortuous', 'torturing', 'vehement', 'violent', 'deadly', 'extreme', 'intense', 'lethal', 'mortal', 'mortiferous', 'noxious', 'pestilent', 'pestilential', 'terrible', 'alto', 'baritone', 'bass', 'booming', 'contralto', 'dark', 'extreme', 'grave', 'great', 'hard', 'low', 'profound', 'resonant', 'rich', 'sonorous', 'strong', 'vivid', 'acute', 'burning', 'clamant', 'clamorous', 'climacteric', 'critical', 'crying', 'desperate', 'drastic', 'exigent', 'extreme', 'immoderate', 'imperative', 'importunate', 'instant', 'pressing', 'brutal', 'cruel', 'drastic', 'exorbitant', 'extreme', 'oppressive', 'rough', 'severe', 'strict', 'arrant', 'atrocious', 'capital', 'deplorable', 'extreme', 'flagrant', 'glaring', 'grievous', 'gross', 'heinous', 'infamous', 'insufferable', 'intolerable', 'monstrous', 'nefarious', 'notorious', 'outright', 'preposterous', 'rank', 'scandalous', 'shocking', 'stark', 'debauchery', 'dissipation', 'dissoluteness', 'exorbitance', 'extravagance', 'extreme', 'extremity', 'immoderacy', 'immoderation', 'indulgence', 'inordinateness', 'intemperance', 'overdoing', 'prodigality', 'saturnalia', 'unrestraint', 'boundless', 'disproportionate', 'dissipated', 'dizzying', 'enormous', 'exaggerated', 'exorbitant', 'extra', 'extravagant', 'extreme', 'immoderate', 'indulgent', 'inordinate', 'intemperate', 'limitless', 'more', 'needless', 'over', 'overboard', 'overkill', 'overmuch', 'plethoric', 'prodigal', 'profligate', 'recrementitious', 'redundant', 'steep', 'stiff', 'stratospheric', 'super', 'superabundant', 'superfluous', 'supernatural', 'towering', 'unbounded', 'unconscionable', 'undue', 'unmeasurable', 'unreasonable', 'acute', 'agonizing', 'burning', 'chastening', 'consuming', 'exquisite', 'extreme', 'grueling', 'harrowing', 'insufferable', 'intense', 'piercing', 'punishing', 'racking', 'rending', 'searing', 'severe', 'sharp', 'shooting', 'stabbing', 'tearing', 'tormenting', 'torturesome', 'torturing', 'unbearable', 'unendurable', 'violent', 'absonant', 'dear', 'enormous', 'exacting', 'expensive', 'extortionate', 'extreme', 'high', 'immoderate', 'inordinate', 'outrageous', 'overboard', 'overmuch', 'preposterous', 'pricey', 'steep', 'stiff', 'towering', 'unconscionable', 'undue', 'unreasonable', 'unwarranted', 'wasteful', 'alarming', 'astonishing', 'awful', 'beautiful', 'breathtaking', 'dreadful', 'fearsome', 'formidable', 'frightening', 'horrible', 'horrifying', 'imposing', 'impressive', 'intimidating', 'magnificent', 'overwhelming', 'shocking', 'stunning', 'terrible', 'terrifying', 'wonderful', 'wondrous', 'daunting', 'exalted', 'fearful', 'frantic', 'grand', 'hairy', 'majestic', 'awesome', 'fascinating', 'incredible', 'marvelous', 'prodigious', 'shocking', 'stunning', 'surprising', 'unbelievable', 'wonderful', 'awesome', 'capital', 'champion', 'excellent', 'fine', 'fly', 'top', 'wonderful', 'awesome', 'bizarre', 'crawly', 'creepy', 'fantastic', 'fearful', 'frightening', 'ghostly', 'mysterious', 'scary', 'spectral', 'strange', 'supernatural', 'superstitious', 'uncanny', 'unearthly', 'weird', 'aces', 'astonishing', 'astounding', 'awesome', 'best', 'breathtaking', 'cool', 'doozie', 'extravagant', 'fab', 'fantastic', 'fictitious', 'greatest', 'groovy', 'immense', 'inconceivable', 'incredible', 'legendary', 'marvelous', 'outrageous', 'peachy', 'phenomenal', 'primo', 'prodigious', 'rad', 'remarkable', 'spectacular', 'striking', 'stupendous', 'super', 'superb', 'terrific', 'topdrawer', 'tops', 'turnon', 'unbelievable', 'unreal', 'wicked', 'a1', 'awesome', 'best', 'bestever', 'delicious', 'farout', 'firstclass', 'firstrate', 'great', 'likewow', 'marvelous', 'outofsight', 'outofthisworld', 'primo', 'sensational', 'superb', 'unreal', 'allpowerful', 'arduous', 'awesome', 'ballbuster', 'challenging', 'colossal', 'dismaying', 'effortful', 'great', 'hard', 'impressive', 'indomitable', 'intimidating', 'labored', 'laborious', 'mammoth', 'mighty', 'murder', 'onerous', 'overpowering', 'powerful', 'puissant', 'rough', 'roughgo', 'staggering', 'strenuous', 'tallorder', 'toilsome', 'tough', 'toughproposition', 'tremendous', 'uphill', 'alarming', 'appalling', 'atrocious', 'awesome', 'awful', 'chilling', 'daunting', 'dire', 'direful', 'dismaying', 'disquieting', 'dread', 'dreadful', 'fearful', 'fearsome', 'formidable', 'ghastly', 'grabber', 'grim', 'grisly', 'gruesome', 'hairraising', 'hairy', 'harrowing', 'hideous', 'horrendous', 'horrible', 'horrid', 'horrifying', 'inconceivable', 'intimidating', 'lurid', 'macabre', 'menacing', 'morbid', 'ominous', 'petrifying', 'portentous', 'repellent', 'spooky', 'terrible', 'terrifying', 'traumatic', 'unnerving', 'unspeakable', 'ace', 'amazing', 'astonishing', 'astounding', 'aweinspiring', 'awesome', 'extraordinary', 'fabulous', 'glorious', 'great', 'prodigious', 'superhuman', 'unreal', 'wonderful', 'awesome', 'celebrated', 'extraordinary', 'famed', 'famous', 'immortal', 'imposing', 'impressive', 'mythical', 'renowned', 'towering', 'august', 'awesome', 'ceremonious', 'cool', 'courtly', 'dignified', 'elevated', 'exalted', 'fab', 'grand', 'grandiose', 'imperial', 'imposing', 'lofty', 'magnific', 'magnificent', 'marvelous', 'mindblowing', 'monumental', 'noble', 'outofthisworld', 'pompous', 'regal', 'royal', 'smashing', 'sovereign', 'stately', 'stunning', 'sublime', 'sumptuous', 'superb', 'astonishing', 'astounding', 'aweinspiring', 'awesome', 'awful', 'bewildering', 'breathtaking', 'confounding', 'difficulttobelieve', 'extraordinary', 'fabulous', 'fantastic', 'implausible', 'improbable', 'incomprehensible', 'inconceivable', 'incredible', 'miraculous', 'phenomenal', 'prodigious', 'remarkable', 'singular', 'spectacular', 'staggering', 'strange', 'striking', 'stunning', 'stupendous', 'supernatural', 'surprising', 'unbelievable', 'unimaginable', 'unlikely', 'unusual', 'wonderful', 'wondrous', 'amazing', 'anomalous', 'astonishing', 'astounding', 'awesome', 'extraordinary', 'fabulous', 'freakish', 'heavy', 'incredible', 'inexplicable', 'magical', 'marvelous', 'monstrous', 'numinous', 'phenomenal', 'preternatural', 'prodigious', 'spectacular', 'staggering', 'strange', 'stupefying', 'stupendous', 'superhuman', 'superior', 'supermundane', 'supernatural', 'supranatural', 'thaumaturgic', 'theutmost', 'unaccountable', 'unbelievable', 'unearthly', 'unimaginable', 'unreal', 'wonderworking', 'wondrous', 'aweinspiring', 'awesome', 'classic', 'enduring', 'enormous', 'fantastic', 'gigantic', 'grand', 'great', 'historic', 'huge', 'immense', 'immortal', 'important', 'lasting', 'lofty', 'majestic', 'mammoth', 'massive', 'memorable', 'mighty', 'mortal', 'mountainous', 'outstanding', 'prodigious', 'significant', 'stupendous', 'towering', 'tremendous', 'unforgettable', 'vast', 'awesome', 'cool', 'dandy', 'deluxe', 'desirable', 'excellent', 'exclusive', 'fashionable', 'fine', 'fly', 'grand', 'groovy', 'keen', 'marvelous', 'neat', 'nifty', 'plush', 'posh', 'ritzy', 'smart', 'stylish', 'super', 'terrific', 'abhorrent', 'appalling', 'atrocious', 'aweinspiring', 'awesome', 'awful', 'beastly', 'dangerous', 'desperate', 'dire', 'disastrous', 'disturbing', 'dread', 'dreaded', 'dreadful', 'extreme', 'fearful', 'frightful', 'ghastly', 'gruesome', 'harrowing', 'hateful', 'hideous', 'horrendous', 'horrid', 'horrifying', 'inconvenient', 'loathsome', 'monstrous', 'obnoxious', 'odious', 'offensive', 'petrifying', 'poor', 'repulsive', 'revolting', 'rotten', 'serious', 'severe', 'shocking', 'unfortunate', 'unnerving', 'unpleasant', 'unwelcome', 'vile', 'agitating', 'appalling', 'awesome', 'awful', 'deafening', 'disquieting', 'dreadful', 'enormous', 'excessive', 'extreme', 'fearful', 'fierce', 'formidable', 'frightful', 'gigantic', 'great', 'harsh', 'horrible', 'horrific', 'huge', 'immense', 'large', 'monstrous', 'severe', 'shocking', 'terrible', 'terrorizing', 'thunderous', 'tremendous', 'upsetting', 'amazing', 'appalling', 'astounding', 'awesome', 'awful', 'blimp', 'colossal', 'cracking', 'deafening', 'dreadful', 'enormous', 'excellent', 'exceptional', 'extraordinary', 'fabulous', 'fantastic', 'fearful', 'formidable', 'frightful', 'gargantuan', 'gigantic', 'great', 'greatbig', 'humongous', 'immense', 'incredible', 'jumbo', 'large', 'mammoth', 'marvelous', 'massive', 'mondo', 'monstrous', 'monumental', 'prodigious', 'stupendous', 'super', 'terrible', 'terrific', 'titanic', 'towering', 'vast', 'whale', 'whopper', 'whopping', 'wonderful', 'abnormal', 'amazing', 'astonishing', 'atypical', 'aweinspiring', 'awesome', 'bizarre', 'conspicuous', 'curious', 'distinguished', 'eminent', 'exceptional', 'extraordinary', 'farout', 'inconceivable', 'incredible', 'memorable', 'noteworthy', 'odd', 'outoftheordinary', 'outstanding', 'phenomenal', 'prodigious', 'prominent', 'queer', 'rare', 'refreshing', 'remarkable', 'significant', 'singular', 'somethingelse', 'special', 'strange', 'surprising', 'uncommon', 'unconventional', 'unexpected', 'unfamiliar', 'unique', 'unparalleled', 'unwonted', 'weird', 'awesome', 'brave', 'courageous', 'fearful', 'fearsome', 'formidable', 'frightening', 'illustrious', 'imminent', 'awesome', 'brave', 'courageous', 'fearless', 'heroic', 'intrepid', 'redoubtable', 'stouthearted', 'valiant', 'admirable', 'amazing', 'astonishing', 'astounding', 'aweinspiring', 'awesome', 'brilliant', 'cool', 'divine', 'dynamite', 'enjoyable', 'excellent', 'fabulous', 'fantastic', 'fine', 'groovy', 'incredible', 'magnificent', 'marvelous', 'miraculous', 'outstanding', 'peachy', 'phenomenal', 'pleasant', 'pleasing', 'prime', 'remarkable', 'sensational', 'somethingelse', 'staggering', 'startling', 'strange', 'stupendous', 'super', 'superb', 'surprising', 'swell', 'terrific', 'toomuch', 'tremendous', 'unheardof', 'wondrous', 'amazing', 'astonishing', 'awesome', 'breathtaking', 'grand', 'impressive', 'majestic', 'mindblowing', 'remarkable', 'stunning', 'wonderful', 'amazing', 'astonishing', 'awesome', 'beautiful', 'celestial', 'elevated', 'empyrean', 'ethereal', 'exalted', 'fabulous', 'grand', 'heavenly', 'inspiring', 'lofty', 'marvelous', 'moving', 'stunning', 'supernal', 'uplifting', 'wonderful', 'absurd', 'amazing', 'astonishing', 'astounding', 'awesome', 'bizarre', 'breathtaking', 'crazy', 'divine', 'extraordinary', 'fabulous', 'fantastic', 'farfetched', 'glorious', 'incredible', 'mad', 'outofthisworld', 'outlandish', 'prodigious', 'remarkable', 'ridiculous', 'sensational', 'spectacular', 'splendid', 'strange', 'stupendous', 'superb', 'terrific', 'unbelievable', 'weird', 'wild', 'wonderful', 'wondrous', 'aweinspiring', 'awesome', 'distressing', 'formidable', 'frightening', 'frightful', 'horrible', 'imposing', 'impressive', 'intimidating', 'massive', 'powerful', 'scary', 'shocking', 'striking', 'terrible', 'terrifying', 'tremendous', 'abhorrent', 'appalling', 'atrocious', 'aweinspiring', 'awesome', 'awful', 'beastly', 'dangerous', 'desperate', 'dire', 'disastrous', 'disturbing', 'dread', 'dreaded', 'dreadful', 'extreme', 'fearful', 'frightful', 'ghastly', 'gruesome', 'harrowing', 'hateful', 'hideous', 'horrible', 'horrid', 'horrifying', 'abnormal', 'amazing', 'astonishing', 'atypic', 'atypical', 'aweinspiring', 'awesome', 'bizarre', 'conspicuous', 'curious', 'distinguished', 'eminent', 'exceptional', 'extraordinary', 'farout', 'inconceivable', 'incredible', 'memorable', 'noteworthy', 'novel', 'odd', 'outoftheordinary', 'outstanding', 'phenomenal', 'prodigious', 'prominent', 'queer', 'rare', 'refreshing', 'remarkable', 'significant', 'singular', 'somethingelse', 'special', 'strange', 'surprising', 'uncommon', 'unconventional', 'unexpected', 'unfamiliar', 'unique', 'unparalleled', 'unwonted', 'weird', 'incomparable', 'matchless', 'peerless', 'singly', 'singular', 'solely', 'unequalled', 'unique', 'unmatched', 'unparalleled', 'unrivaled', 'unsurpassed', 'bizarre', 'exotic', 'extraordinary', 'marvelous', 'mysterious', 'novel', 'oddball', 'peculiar', 'puzzling', 'quaint', 'queer', 'rare', 'remarkable', 'singular', 'strange', 'unconventional', 'unexpected', 'unique', 'unorthodox', 'unusual', 'weird', 'wonderful', 'another', 'anotherstory', 'atypical', 'bizarre', 'discrete', 'diverse', 'especial', 'express', 'extraordinary', 'individual', 'novel', 'original', 'other', 'outoftheordinary', 'particular', 'peculiar', 'rare', 'several', 'singular', 'somethingelse', 'special', 'specialized', 'specific', 'startling', 'strange', 'uncommon', 'unconventional', 'unique', 'unusual', 'various', 'chief', 'distinguished', 'dominant', 'exclusive', 'express', 'extraordinary', 'individual', 'marked', 'notable', 'noteworthy', 'outstanding', 'paramount', 'peculiar', 'personal', 'predominant', 'preeminent', 'preponderant', 'principal', 'private', 'set', 'signal', 'singular', 'special', 'specific', 'supreme', 'surpassing', 'uncommon', 'unique', 'unusual', 'aberrant', 'abnormal', 'anomalous', 'atypical', 'deviant', 'distinct', 'extraordinary', 'inconsistent', 'infrequent', 'notable', 'noteworthy', 'odd', 'peculiar', 'phenomenal', 'rare', 'remarkable', 'scarce', 'singular', 'special', 'strange', 'uncommon', 'uncustomary', 'unheardof', 'unimaginable', 'unique', 'unordinary', 'unprecedented', 'unthinkable', 'unusual', 'absolute', 'aloof', 'aristocratic', 'chic', 'choice', 'chosen', 'circumscribed', 'clannish', 'classy', 'cliquish', 'closed', 'complete', 'confined', 'countryclub', 'discriminative', 'elegant', 'entire', 'exclusionary', 'exclusory', 'fashionable', 'full', 'independent', 'licensed', 'limited', 'narrow', 'only', 'particular', 'peculiar', 'posh', 'preferential', 'private', 'privileged', 'prohibitive', 'restrictive', 'ritzy', 'segregated', 'select', 'selfish', 'single', 'snobbish', 'sociallycorrect', 'sole', 'swank', 'total', 'undivided', 'unique', 'uppercrust', 'whole', 'consummate', 'matchless', 'nonpareil', 'peerless', 'perfect', 'supreme', 'unequalled', 'unexampled', 'unique', 'unmatched', 'unparalleled', 'unrivalled', 'unsurpassable', 'aberrant', 'anomalous', 'atypical', 'capricious', 'deviant', 'different', 'disorderly', 'divergent', 'eccentric', 'exceptional', 'extraordinary', 'immoderate', 'improper', 'inappropriate', 'inordinate', 'odd', 'offkey', 'queer', 'quirky', 'singular', 'strange', 'unconventional', 'unique', 'unnatural', 'unofficial', 'unorthodox', 'unsuitable', 'unusual', 'abandoned', 'alone', 'deserted', 'forsaken', 'isolated', 'lonely', 'lonesome', 'one', 'onliest', 'particular', 'secluded', 'separate', 'separated', 'single', 'singular', 'sole', 'solitary', 'solo', 'stag', 'unaccompanied', 'unique', 'advanced', 'aucourant', 'brandnew', 'contemporary', 'current', 'cuttingedge', 'dewy', 'different', 'dissimilar', 'distinct', 'fashionable', 'inexperienced', 'justout', 'late', 'latest', 'modern', 'modernistic', 'modish', 'neoteric', 'newfangled', 'novel', 'now', 'original', 'recent', 'spickandspan', 'stateoftheart', 'strange', 'topical', 'ultramodern', 'unaccustomed', 'uncontaminated', 'unfamiliar', 'unique', 'unknown', 'unlike', 'unseasoned', 'unskilled', 'unspoiled', 'untouched', 'untrained', 'untried', 'untrodden', 'unused', 'unusual', 'uptodate', 'virgin', 'youthful']

var word_bank_uniq = _.uniq(word_bank_duplicates)

var word_bank = _.each(word_bank_uniq, function(word){ word.toLowerCase()})

